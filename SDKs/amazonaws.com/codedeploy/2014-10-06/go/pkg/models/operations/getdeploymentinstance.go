package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentInstanceXAmzTargetEnum string

const (
	GetDeploymentInstanceXAmzTargetEnumCodeDeploy20141006GetDeploymentInstance GetDeploymentInstanceXAmzTargetEnum = "CodeDeploy_20141006.GetDeploymentInstance"
)

type GetDeploymentInstanceHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeploymentInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDeploymentInstanceRequest struct {
	Headers GetDeploymentInstanceHeaders
	Request shared.GetDeploymentInstanceInput `request:"mediaType=application/json"`
}

type GetDeploymentInstanceResponse struct {
	ContentType                     string
	DeploymentDoesNotExistException *interface{}
	DeploymentIDRequiredException   *interface{}
	GetDeploymentInstanceOutput     *shared.GetDeploymentInstanceOutput
	InstanceDoesNotExistException   *interface{}
	InstanceIDRequiredException     *interface{}
	InvalidComputePlatformException *interface{}
	InvalidDeploymentIDException    *interface{}
	InvalidInstanceNameException    *interface{}
	StatusCode                      int64
}
