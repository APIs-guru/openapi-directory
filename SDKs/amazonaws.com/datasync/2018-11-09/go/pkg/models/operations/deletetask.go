package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTaskXAmzTargetEnum string

const (
	DeleteTaskXAmzTargetEnumFmrsServiceDeleteTask DeleteTaskXAmzTargetEnum = "FmrsService.DeleteTask"
)

type DeleteTaskHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTaskRequest struct {
	Headers DeleteTaskHeaders
	Request shared.DeleteTaskRequest `request:"mediaType=application/json"`
}

type DeleteTaskResponse struct {
	ContentType             string
	DeleteTaskResponse      map[string]interface{}
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
