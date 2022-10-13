package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateComputeEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateComputeEnvironmentRequestBodyComputeResources struct {
	DesiredvCpus     *int64   `json:"desiredvCpus"`
	MaxvCpus         *int64   `json:"maxvCpus"`
	MinvCpus         *int64   `json:"minvCpus"`
	SecurityGroupIds []string `json:"securityGroupIds"`
	Subnets          []string `json:"subnets"`
}

type UpdateComputeEnvironmentRequestBodyStateEnum string

const (
	UpdateComputeEnvironmentRequestBodyStateEnumEnabled  UpdateComputeEnvironmentRequestBodyStateEnum = "ENABLED"
	UpdateComputeEnvironmentRequestBodyStateEnumDisabled UpdateComputeEnvironmentRequestBodyStateEnum = "DISABLED"
)

type UpdateComputeEnvironmentRequestBody struct {
	ComputeEnvironment string                                               `json:"computeEnvironment"`
	ComputeResources   *UpdateComputeEnvironmentRequestBodyComputeResources `json:"computeResources"`
	ServiceRole        *string                                              `json:"serviceRole"`
	State              *UpdateComputeEnvironmentRequestBodyStateEnum        `json:"state"`
}

type UpdateComputeEnvironmentRequest struct {
	Headers UpdateComputeEnvironmentHeaders
	Request UpdateComputeEnvironmentRequestBody `request:"mediaType=application/json"`
}

type UpdateComputeEnvironmentResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	ServerException                  *interface{}
	StatusCode                       int64
	UpdateComputeEnvironmentResponse *shared.UpdateComputeEnvironmentResponse
}
