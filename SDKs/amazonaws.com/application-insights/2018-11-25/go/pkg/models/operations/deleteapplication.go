package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationXAmzTargetEnum string

const (
	DeleteApplicationXAmzTargetEnumEc2WindowsBarleyServiceDeleteApplication DeleteApplicationXAmzTargetEnum = "EC2WindowsBarleyService.DeleteApplication"
)

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationRequest struct {
	Headers DeleteApplicationHeaders
	Request shared.DeleteApplicationRequest `request:"mediaType=application/json"`
}

type DeleteApplicationResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	DeleteApplicationResponse map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
