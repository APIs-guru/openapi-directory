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
	ID      *string `json:"id"`
	Name    *string `json:"name"`
	Version *string `json:"version"`
}

type CreateNodegroupRequestBodyRemoteAccess struct {
	Ec2SSHKey            *string  `json:"ec2SshKey"`
	SourceSecurityGroups []string `json:"sourceSecurityGroups"`
}

type CreateNodegroupRequestBodyScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize"`
	MaxSize     *int64 `json:"maxSize"`
	MinSize     *int64 `json:"minSize"`
}

type CreateNodegroupRequestBodyUpdateConfig struct {
	MaxUnavailable           *int64 `json:"maxUnavailable"`
	MaxUnavailablePercentage *int64 `json:"maxUnavailablePercentage"`
}

type CreateNodegroupRequestBody struct {
	AmiType            *CreateNodegroupRequestBodyAmiTypeEnum      `json:"amiType"`
	CapacityType       *CreateNodegroupRequestBodyCapacityTypeEnum `json:"capacityType"`
	ClientRequestToken *string                                     `json:"clientRequestToken"`
	DiskSize           *int64                                      `json:"diskSize"`
	InstanceTypes      []string                                    `json:"instanceTypes"`
	Labels             map[string]string                           `json:"labels"`
	LaunchTemplate     *CreateNodegroupRequestBodyLaunchTemplate   `json:"launchTemplate"`
	NodeRole           string                                      `json:"nodeRole"`
	NodegroupName      string                                      `json:"nodegroupName"`
	ReleaseVersion     *string                                     `json:"releaseVersion"`
	RemoteAccess       *CreateNodegroupRequestBodyRemoteAccess     `json:"remoteAccess"`
	ScalingConfig      *CreateNodegroupRequestBodyScalingConfig    `json:"scalingConfig"`
	Subnets            []string                                    `json:"subnets"`
	Tags               map[string]string                           `json:"tags"`
	Taints             []shared.Taint                              `json:"taints"`
	UpdateConfig       *CreateNodegroupRequestBodyUpdateConfig     `json:"updateConfig"`
	Version            *string                                     `json:"version"`
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
