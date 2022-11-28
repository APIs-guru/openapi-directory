package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodegroupVersionPathParams struct {
	Name          string `pathParam:"style=simple,explode=false,name=name"`
	NodegroupName string `pathParam:"style=simple,explode=false,name=nodegroupName"`
}

type UpdateNodegroupVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateNodegroupVersionRequestBodyLaunchTemplate
// <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
type UpdateNodegroupVersionRequestBodyLaunchTemplate struct {
	ID      *string `json:"id,omitempty"`
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

type UpdateNodegroupVersionRequestBody struct {
	ClientRequestToken *string                                          `json:"clientRequestToken,omitempty"`
	Force              *bool                                            `json:"force,omitempty"`
	LaunchTemplate     *UpdateNodegroupVersionRequestBodyLaunchTemplate `json:"launchTemplate,omitempty"`
	ReleaseVersion     *string                                          `json:"releaseVersion,omitempty"`
	Version            *string                                          `json:"version,omitempty"`
}

type UpdateNodegroupVersionRequest struct {
	PathParams UpdateNodegroupVersionPathParams
	Headers    UpdateNodegroupVersionHeaders
	Request    UpdateNodegroupVersionRequestBody `request:"mediaType=application/json"`
}

type UpdateNodegroupVersionResponse struct {
	ClientException                *interface{}
	ContentType                    string
	InvalidParameterException      *interface{}
	InvalidRequestException        *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	ServerException                *interface{}
	StatusCode                     int64
	UpdateNodegroupVersionResponse *shared.UpdateNodegroupVersionResponse
}
