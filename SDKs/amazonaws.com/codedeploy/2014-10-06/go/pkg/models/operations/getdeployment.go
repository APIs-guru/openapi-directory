package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentXAmzTargetEnum string

const (
	GetDeploymentXAmzTargetEnumCodeDeploy20141006GetDeployment GetDeploymentXAmzTargetEnum = "CodeDeploy_20141006.GetDeployment"
)

type GetDeploymentHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeploymentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDeploymentRequest struct {
	Headers GetDeploymentHeaders
	Request shared.GetDeploymentInput `request:"mediaType=application/json"`
}

type GetDeploymentResponse struct {
	ContentType                     string
	DeploymentDoesNotExistException *interface{}
	DeploymentIDRequiredException   *interface{}
	GetDeploymentOutput             *shared.GetDeploymentOutput
	InvalidDeploymentIDException    *interface{}
	StatusCode                      int64
}
