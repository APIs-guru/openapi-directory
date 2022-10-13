package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateComponentXAmzTargetEnum string

const (
	UpdateComponentXAmzTargetEnumEc2WindowsBarleyServiceUpdateComponent UpdateComponentXAmzTargetEnum = "EC2WindowsBarleyService.UpdateComponent"
)

type UpdateComponentHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateComponentRequest struct {
	Headers UpdateComponentHeaders
	Request shared.UpdateComponentRequest `request:"mediaType=application/json"`
}

type UpdateComponentResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateComponentResponse   map[string]interface{}
	ValidationException       *interface{}
}
