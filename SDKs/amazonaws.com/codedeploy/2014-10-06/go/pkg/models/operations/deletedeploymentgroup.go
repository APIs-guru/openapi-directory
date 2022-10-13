package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeploymentGroupXAmzTargetEnum string

const (
	DeleteDeploymentGroupXAmzTargetEnumCodeDeploy20141006DeleteDeploymentGroup DeleteDeploymentGroupXAmzTargetEnum = "CodeDeploy_20141006.DeleteDeploymentGroup"
)

type DeleteDeploymentGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDeploymentGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDeploymentGroupRequest struct {
	Headers DeleteDeploymentGroupHeaders
	Request shared.DeleteDeploymentGroupInput `request:"mediaType=application/json"`
}

type DeleteDeploymentGroupResponse struct {
	ApplicationNameRequiredException     *interface{}
	ContentType                          string
	DeleteDeploymentGroupOutput          *shared.DeleteDeploymentGroupOutput
	DeploymentGroupNameRequiredException *interface{}
	InvalidApplicationNameException      *interface{}
	InvalidDeploymentGroupNameException  *interface{}
	InvalidRoleException                 *interface{}
	StatusCode                           int64
}
