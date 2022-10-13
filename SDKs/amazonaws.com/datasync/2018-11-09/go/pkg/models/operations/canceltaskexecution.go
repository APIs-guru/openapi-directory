package operations

import (
	"openapi/pkg/models/shared"
)

type CancelTaskExecutionXAmzTargetEnum string

const (
	CancelTaskExecutionXAmzTargetEnumFmrsServiceCancelTaskExecution CancelTaskExecutionXAmzTargetEnum = "FmrsService.CancelTaskExecution"
)

type CancelTaskExecutionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelTaskExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelTaskExecutionRequest struct {
	Headers CancelTaskExecutionHeaders
	Request shared.CancelTaskExecutionRequest `request:"mediaType=application/json"`
}

type CancelTaskExecutionResponse struct {
	CancelTaskExecutionResponse map[string]interface{}
	ContentType                 string
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	StatusCode                  int64
}
