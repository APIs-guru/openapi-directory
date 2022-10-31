package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTaskXAmzTargetEnum string

const (
	UpdateTaskXAmzTargetEnumFmrsServiceUpdateTask UpdateTaskXAmzTargetEnum = "FmrsService.UpdateTask"
)

type UpdateTaskHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTaskRequest struct {
	Headers UpdateTaskHeaders
	Request shared.UpdateTaskRequest `request:"mediaType=application/json"`
}

type UpdateTaskResponse struct {
	ContentType             string
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
	UpdateTaskResponse      map[string]interface{}
}
