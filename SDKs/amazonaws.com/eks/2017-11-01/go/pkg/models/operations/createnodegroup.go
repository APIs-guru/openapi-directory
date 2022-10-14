package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodegroupPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateNodegroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateNodegroupRequestBodyAmiTypeEnum string

const (
	CreateNodegroupRequestBodyAmiTypeEnumAl2X8664    CreateNodegroupRequestBodyAmiTypeEnum = "AL2_x86_64"
	CreateNodegroupRequestBodyAmiTypeEnumAl2X8664Gpu CreateNodegroupRequestBodyAmiTypeEnum = "AL2_x86_64_GPU"
	CreateNodegroupRequestBodyAmiTypeEnumAl2Arm64    CreateNodegroupRequestBodyAmiTypeEnum = "AL2_ARM_64"
	CreateNodegroupRequestBodyAmiTypeEnumCustom      CreateNodegroupRequestBodyAmiTypeEnum = "CUSTOM"
)

type CreateNodegroupRequestBodyCapacityTypeEnum string

const (
	CreateNodegroupRequestBodyCapacityTypeEnumOnDemand CreateNodegroupRequestBodyCapacityTypeEnum = "ON_DEMAND"
	CreateNodegroupRequestBodyCapacityTypeEnumSpot     CreateNodegroupRequestBodyCapacityTypeEnum = "SPOT"
)

type CreateNodegroupRequestBodyLaunchTemplate struct {
	ID      *string `json:"id,omitempty"`
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

type CreateNodegroupRequestBodyRemoteAccess struct {
	Ec2SSHKey            *string  `json:"ec2SshKey,omitempty"`
	SourceSecurityGroups []string `json:"sourceSecurityGroups,omitempty"`
}

type CreateNodegroupRequestBodyScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize,omitempty"`
	MaxSize     *int64 `json:"maxSize,omitempty"`
	MinSize     *int64 `json:"minSize,omitempty"`
}

type CreateNodegroupRequestBodyUpdateConfig struct {
	MaxUnavailable           *int64 `json:"maxUnavailable,omitempty"`
	MaxUnavailablePercentage *int64 `json:"maxUnavailablePercentage,omitempty"`
}

type CreateNodegroupRequestBody struct {
	AmiType            *CreateNodegroupRequestBodyAmiTypeEnum      `json:"amiType,omitempty"`
	CapacityType       *CreateNodegroupRequestBodyCapacityTypeEnum `json:"capacityType,omitempty"`
	ClientRequestToken *string                                     `json:"clientRequestToken,omitempty"`
	DiskSize           *int64                                      `json:"diskSize,omitempty"`
	InstanceTypes      []string                                    `json:"instanceTypes,omitempty"`
	Labels             map[string]string                           `json:"labels,omitempty"`
	LaunchTemplate     *CreateNodegroupRequestBodyLaunchTemplate   `json:"launchTemplate,omitempty"`
	NodeRole           string                                      `json:"nodeRole"`
	NodegroupName      string                                      `json:"nodegroupName"`
	ReleaseVersion     *string                                     `json:"releaseVersion,omitempty"`
	RemoteAccess       *CreateNodegroupRequestBodyRemoteAccess     `json:"remoteAccess,omitempty"`
	ScalingConfig      *CreateNodegroupRequestBodyScalingConfig    `json:"scalingConfig,omitempty"`
	Subnets            []string                                    `json:"subnets"`
	Tags               map[string]string                           `json:"tags,omitempty"`
	Taints             []shared.Taint                              `json:"taints,omitempty"`
	UpdateConfig       *CreateNodegroupRequestBodyUpdateConfig     `json:"updateConfig,omitempty"`
	Version            *string                                     `json:"version,omitempty"`
}

type CreateNodegroupRequest struct {
	PathParams CreateNodegroupPathParams
	Headers    CreateNodegroupHeaders
	Request    CreateNodegroupRequestBody `request:"mediaType=application/json"`
}

type CreateNodegroupResponse struct {
	ClientException                *interface{}
	ContentType                    string
	CreateNodegroupResponse        *shared.CreateNodegroupResponse
	InvalidParameterException      *interface{}
	InvalidRequestException        *interface{}
	ResourceInUseException         *interface{}
	ResourceLimitExceededException *interface{}
	ServerException                *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
