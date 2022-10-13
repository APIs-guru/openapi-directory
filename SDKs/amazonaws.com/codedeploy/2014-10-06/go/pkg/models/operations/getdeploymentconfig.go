package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentConfigXAmzTargetEnum string

const (
	GetDeploymentConfigXAmzTargetEnumCodeDeploy20141006GetDeploymentConfig GetDeploymentConfigXAmzTargetEnum = "CodeDeploy_20141006.GetDeploymentConfig"
)

type GetDeploymentConfigHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeploymentConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDeploymentConfigRequest struct {
	Headers GetDeploymentConfigHeaders
	Request shared.GetDeploymentConfigInput `request:"mediaType=application/json"`
}

type GetDeploymentConfigResponse struct {
	ContentType                           string
	DeploymentConfigDoesNotExistException *interface{}
	DeploymentConfigNameRequiredException *interface{}
	GetDeploymentConfigOutput             *shared.GetDeploymentConfigOutput
	InvalidComputePlatformException       *interface{}
	InvalidDeploymentConfigNameException  *interface{}
	StatusCode                            int64
}
