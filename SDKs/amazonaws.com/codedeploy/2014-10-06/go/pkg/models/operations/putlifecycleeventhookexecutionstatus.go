package operations

import (
	"openapi/pkg/models/shared"
)

type PutLifecycleEventHookExecutionStatusXAmzTargetEnum string

const (
	PutLifecycleEventHookExecutionStatusXAmzTargetEnumCodeDeploy20141006PutLifecycleEventHookExecutionStatus PutLifecycleEventHookExecutionStatusXAmzTargetEnum = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
)

type PutLifecycleEventHookExecutionStatusHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutLifecycleEventHookExecutionStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutLifecycleEventHookExecutionStatusRequest struct {
	Headers PutLifecycleEventHookExecutionStatusHeaders
	Request shared.PutLifecycleEventHookExecutionStatusInput `request:"mediaType=application/json"`
}

type PutLifecycleEventHookExecutionStatusResponse struct {
	ContentType                                       string
	DeploymentDoesNotExistException                   *interface{}
	DeploymentIDRequiredException                     *interface{}
	InvalidDeploymentIDException                      *interface{}
	InvalidLifecycleEventHookExecutionIDException     *interface{}
	InvalidLifecycleEventHookExecutionStatusException *interface{}
	LifecycleEventAlreadyCompletedException           *interface{}
	PutLifecycleEventHookExecutionStatusOutput        *shared.PutLifecycleEventHookExecutionStatusOutput
	StatusCode                                        int64
	UnsupportedActionForDeploymentTypeException       *interface{}
}
