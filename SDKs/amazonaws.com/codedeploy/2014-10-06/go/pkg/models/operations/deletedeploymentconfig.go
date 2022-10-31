package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeploymentConfigXAmzTargetEnum string

const (
	DeleteDeploymentConfigXAmzTargetEnumCodeDeploy20141006DeleteDeploymentConfig DeleteDeploymentConfigXAmzTargetEnum = "CodeDeploy_20141006.DeleteDeploymentConfig"
)

type DeleteDeploymentConfigHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDeploymentConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteDeploymentConfigRequest struct {
	Headers DeleteDeploymentConfigHeaders
	Request shared.DeleteDeploymentConfigInput `request:"mediaType=application/json"`
}

type DeleteDeploymentConfigResponse struct {
	ContentType                           string
	DeploymentConfigInUseException        *interface{}
	DeploymentConfigNameRequiredException *interface{}
	InvalidDeploymentConfigNameException  *interface{}
	InvalidOperationException             *interface{}
	StatusCode                            int64
}
