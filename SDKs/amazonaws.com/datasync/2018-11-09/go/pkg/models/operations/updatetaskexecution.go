package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTaskExecutionXAmzTargetEnum string

const (
	UpdateTaskExecutionXAmzTargetEnumFmrsServiceUpdateTaskExecution UpdateTaskExecutionXAmzTargetEnum = "FmrsService.UpdateTaskExecution"
)

type UpdateTaskExecutionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTaskExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTaskExecutionRequest struct {
	Headers UpdateTaskExecutionHeaders
	Request shared.UpdateTaskExecutionRequest `request:"mediaType=application/json"`
}

type UpdateTaskExecutionResponse struct {
	ContentType                 string
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	StatusCode                  int64
	UpdateTaskExecutionResponse map[string]interface{}
}
