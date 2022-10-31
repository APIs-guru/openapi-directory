package operations

import (
	"openapi/pkg/models/shared"
)

type StartTriggerXAmzTargetEnum string

const (
	StartTriggerXAmzTargetEnumAwsGlueStartTrigger StartTriggerXAmzTargetEnum = "AWSGlue.StartTrigger"
)

type StartTriggerHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartTriggerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartTriggerRequest struct {
	Headers StartTriggerHeaders
	Request shared.StartTriggerRequest `request:"mediaType=application/json"`
}

type StartTriggerResponse struct {
	ConcurrentRunsExceededException      *interface{}
	ContentType                          string
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StartTriggerResponse                 *shared.StartTriggerResponse
	StatusCode                           int64
}
