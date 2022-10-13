package operations

import (
	"openapi/pkg/models/shared"
)

type CreateComputeEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateComputeEnvironmentRequestBodyComputeResources struct {
	AllocationStrategy *shared.CrAllocationStrategyEnum    `json:"allocationStrategy"`
	BidPercentage      *int64                              `json:"bidPercentage"`
	DesiredvCpus       *int64                              `json:"desiredvCpus"`
	Ec2Configuration   []shared.Ec2Configuration           `json:"ec2Configuration"`
	Ec2KeyPair         *string                             `json:"ec2KeyPair"`
	ImageID            *string                             `json:"imageId"`
	InstanceRole       *string                             `json:"instanceRole"`
	InstanceTypes      []string                            `json:"instanceTypes"`
	LaunchTemplate     *shared.LaunchTemplateSpecification `json:"launchTemplate"`
	MaxvCpus           *int64                              `json:"maxvCpus"`
	MinvCpus           *int64                              `json:"minvCpus"`
	PlacementGroup     *string                             `json:"placementGroup"`
	SecurityGroupIds   []string                            `json:"securityGroupIds"`
	SpotIamFleetRole   *string                             `json:"spotIamFleetRole"`
	Subnets            []string                            `json:"subnets"`
	Tags               map[string]string                   `json:"tags"`
	Type               *shared.CrTypeEnum                  `json:"type"`
}

type CreateComputeEnvironmentRequestBodyStateEnum string

const (
	CreateComputeEnvironmentRequestBodyStateEnumEnabled  CreateComputeEnvironmentRequestBodyStateEnum = "ENABLED"
	CreateComputeEnvironmentRequestBodyStateEnumDisabled CreateComputeEnvironmentRequestBodyStateEnum = "DISABLED"
)

type CreateComputeEnvironmentRequestBodyTypeEnum string

const (
	CreateComputeEnvironmentRequestBodyTypeEnumManaged   CreateComputeEnvironmentRequestBodyTypeEnum = "MANAGED"
	CreateComputeEnvironmentRequestBodyTypeEnumUnmanaged CreateComputeEnvironmentRequestBodyTypeEnum = "UNMANAGED"
)

type CreateComputeEnvironmentRequestBody struct {
	ComputeEnvironmentName string                                               `json:"computeEnvironmentName"`
	ComputeResources       *CreateComputeEnvironmentRequestBodyComputeResources `json:"computeResources"`
	ServiceRole            *string                                              `json:"serviceRole"`
	State                  *CreateComputeEnvironmentRequestBodyStateEnum        `json:"state"`
	Tags                   map[string]string                                    `json:"tags"`
	Type                   CreateComputeEnvironmentRequestBodyTypeEnum          `json:"type"`
}

type CreateComputeEnvironmentRequest struct {
	Headers CreateComputeEnvironmentHeaders
	Request CreateComputeEnvironmentRequestBody `request:"mediaType=application/json"`
}

type CreateComputeEnvironmentResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	CreateComputeEnvironmentResponse *shared.CreateComputeEnvironmentResponse
	ServerException                  *interface{}
	StatusCode                       int64
}
