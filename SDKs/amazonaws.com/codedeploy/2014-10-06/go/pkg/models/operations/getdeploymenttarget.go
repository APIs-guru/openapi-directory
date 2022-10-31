package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentTargetXAmzTargetEnum string

const (
	GetDeploymentTargetXAmzTargetEnumCodeDeploy20141006GetDeploymentTarget GetDeploymentTargetXAmzTargetEnum = "CodeDeploy_20141006.GetDeploymentTarget"
)

type GetDeploymentTargetHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeploymentTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDeploymentTargetRequest struct {
	Headers GetDeploymentTargetHeaders
	Request shared.GetDeploymentTargetInput `request:"mediaType=application/json"`
}

type GetDeploymentTargetResponse struct {
	ContentType                           string
	DeploymentDoesNotExistException       *interface{}
	DeploymentIDRequiredException         *interface{}
	DeploymentNotStartedException         *interface{}
	DeploymentTargetDoesNotExistException *interface{}
	DeploymentTargetIDRequiredException   *interface{}
	GetDeploymentTargetOutput             *shared.GetDeploymentTargetOutput
	InvalidDeploymentIDException          *interface{}
	InvalidDeploymentTargetIDException    *interface{}
	InvalidInstanceNameException          *interface{}
	StatusCode                            int64
}
