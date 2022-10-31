package operations

import (
	"openapi/pkg/models/shared"
)

type StartRemediationExecutionXAmzTargetEnum string

const (
	StartRemediationExecutionXAmzTargetEnumStarlingDoveServiceStartRemediationExecution StartRemediationExecutionXAmzTargetEnum = "StarlingDoveService.StartRemediationExecution"
)

type StartRemediationExecutionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartRemediationExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartRemediationExecutionRequest struct {
	Headers StartRemediationExecutionHeaders
	Request shared.StartRemediationExecutionRequest `request:"mediaType=application/json"`
}

type StartRemediationExecutionResponse struct {
	ContentType                             string
	InsufficientPermissionsException        *interface{}
	InvalidParameterValueException          *interface{}
	NoSuchRemediationConfigurationException *interface{}
	StartRemediationExecutionResponse       *shared.StartRemediationExecutionResponse
	StatusCode                              int64
}
