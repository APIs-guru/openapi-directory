package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentGroupXAmzTargetEnum string

const (
	GetDeploymentGroupXAmzTargetEnumCodeDeploy20141006GetDeploymentGroup GetDeploymentGroupXAmzTargetEnum = "CodeDeploy_20141006.GetDeploymentGroup"
)

type GetDeploymentGroupHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeploymentGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDeploymentGroupRequest struct {
	Headers GetDeploymentGroupHeaders
	Request shared.GetDeploymentGroupInput `request:"mediaType=application/json"`
}

type GetDeploymentGroupResponse struct {
	ApplicationDoesNotExistException      *interface{}
	ApplicationNameRequiredException      *interface{}
	ContentType                           string
	DeploymentConfigDoesNotExistException *interface{}
	DeploymentGroupDoesNotExistException  *interface{}
	DeploymentGroupNameRequiredException  *interface{}
	GetDeploymentGroupOutput              *shared.GetDeploymentGroupOutput
	InvalidApplicationNameException       *interface{}
	InvalidDeploymentGroupNameException   *interface{}
	StatusCode                            int64
}
