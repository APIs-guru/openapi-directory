package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApplicationXAmzTargetEnum string

const (
	UpdateApplicationXAmzTargetEnumEc2WindowsBarleyServiceUpdateApplication UpdateApplicationXAmzTargetEnum = "EC2WindowsBarleyService.UpdateApplication"
)

type UpdateApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateApplicationRequest struct {
	Headers UpdateApplicationHeaders
	Request shared.UpdateApplicationRequest `request:"mediaType=application/json"`
}

type UpdateApplicationResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateApplicationResponse *shared.UpdateApplicationResponse
	ValidationException       *interface{}
}
