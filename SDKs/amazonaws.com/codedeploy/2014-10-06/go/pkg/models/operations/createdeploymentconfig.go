package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentConfigXAmzTargetEnum string

const (
	CreateDeploymentConfigXAmzTargetEnumCodeDeploy20141006CreateDeploymentConfig CreateDeploymentConfigXAmzTargetEnum = "CodeDeploy_20141006.CreateDeploymentConfig"
)

type CreateDeploymentConfigHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeploymentConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDeploymentConfigRequest struct {
	Headers CreateDeploymentConfigHeaders
	Request shared.CreateDeploymentConfigInput `request:"mediaType=application/json"`
}

type CreateDeploymentConfigResponse struct {
	ContentType                                 string
	CreateDeploymentConfigOutput                *shared.CreateDeploymentConfigOutput
	DeploymentConfigAlreadyExistsException      *interface{}
	DeploymentConfigLimitExceededException      *interface{}
	DeploymentConfigNameRequiredException       *interface{}
	InvalidComputePlatformException             *interface{}
	InvalidDeploymentConfigNameException        *interface{}
	InvalidMinimumHealthyHostValueException     *interface{}
	InvalidTrafficRoutingConfigurationException *interface{}
	StatusCode                                  int64
}
