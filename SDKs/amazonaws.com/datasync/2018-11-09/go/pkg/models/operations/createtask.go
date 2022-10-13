package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaskXAmzTargetEnum string

const (
	CreateTaskXAmzTargetEnumFmrsServiceCreateTask CreateTaskXAmzTargetEnum = "FmrsService.CreateTask"
)

type CreateTaskHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTaskRequest struct {
	Headers CreateTaskHeaders
	Request shared.CreateTaskRequest `request:"mediaType=application/json"`
}

type CreateTaskResponse struct {
	ContentType             string
	CreateTaskResponse      *shared.CreateTaskResponse
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
