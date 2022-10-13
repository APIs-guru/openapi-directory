package operations

import (
	"openapi/pkg/models/shared"
)

type PollForTaskXAmzTargetEnum string

const (
	PollForTaskXAmzTargetEnumDataPipelinePollForTask PollForTaskXAmzTargetEnum = "DataPipeline.PollForTask"
)

type PollForTaskHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PollForTaskRequest struct {
	Headers PollForTaskHeaders
	Request shared.PollForTaskInput `request:"mediaType=application/json"`
}

type PollForTaskResponse struct {
	ContentType             string
	InternalServiceError    *interface{}
	InvalidRequestException *interface{}
	PollForTaskOutput       *shared.PollForTaskOutput
	StatusCode              int64
	TaskNotFoundException   *interface{}
}
