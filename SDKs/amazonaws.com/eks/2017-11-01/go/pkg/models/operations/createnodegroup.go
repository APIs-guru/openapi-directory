package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodegroupPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateNodegroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

// CreateNodegroupRequestBodyLaunchTemplate
// <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
type CreateNodegroupRequestBodyLaunchTemplate struct {
	ID      *string `json:"id,omitempty"`
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

// CreateNodegroupRequestBodyRemoteAccess
// An object representing the remote access configuration for the managed node group.
type CreateNodegroupRequestBodyRemoteAccess struct {
	Ec2SSHKey            *string  `json:"ec2SshKey,omitempty"`
	SourceSecurityGroups []string `json:"sourceSecurityGroups,omitempty"`
}

// CreateNodegroupRequestBodyScalingConfig
// An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
type CreateNodegroupRequestBodyScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize,omitempty"`
	MaxSize     *int64 `json:"maxSize,omitempty"`
	MinSize     *int64 `json:"minSize,omitempty"`
}

// CreateNodegroupRequestBodyUpdateConfig
// The node group update configuration.
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
