package operations

import (
	"openapi/pkg/models/shared"
)

type SkipWaitTimeForInstanceTerminationXAmzTargetEnum string

const (
	SkipWaitTimeForInstanceTerminationXAmzTargetEnumCodeDeploy20141006SkipWaitTimeForInstanceTermination SkipWaitTimeForInstanceTerminationXAmzTargetEnum = "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination"
)

type SkipWaitTimeForInstanceTerminationHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SkipWaitTimeForInstanceTerminationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SkipWaitTimeForInstanceTerminationRequest struct {
	Headers SkipWaitTimeForInstanceTerminationHeaders
	Request shared.SkipWaitTimeForInstanceTerminationInput `request:"mediaType=application/json"`
}

type SkipWaitTimeForInstanceTerminationResponse struct {
	ContentType                                 string
	DeploymentAlreadyCompletedException         *interface{}
	DeploymentDoesNotExistException             *interface{}
	DeploymentIDRequiredException               *interface{}
	DeploymentNotStartedException               *interface{}
	InvalidDeploymentIDException                *interface{}
	StatusCode                                  int64
	UnsupportedActionForDeploymentTypeException *interface{}
}
