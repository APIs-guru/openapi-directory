package operations

import (
	"openapi/pkg/models/shared"
)

type StartTaskExecutionXAmzTargetEnum string

const (
	StartTaskExecutionXAmzTargetEnumFmrsServiceStartTaskExecution StartTaskExecutionXAmzTargetEnum = "FmrsService.StartTaskExecution"
)

type StartTaskExecutionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartTaskExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartTaskExecutionRequest struct {
	Headers StartTaskExecutionHeaders
	Request shared.StartTaskExecutionRequest `request:"mediaType=application/json"`
}

type StartTaskExecutionResponse struct {
	ContentType                string
	InternalException          *interface{}
	InvalidRequestException    *interface{}
	StartTaskExecutionResponse *shared.StartTaskExecutionResponse
	StatusCode                 int64
}
