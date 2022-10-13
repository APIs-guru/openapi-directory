package operations

import (
	"openapi/pkg/models/shared"
)

type CreateComponentXAmzTargetEnum string

const (
	CreateComponentXAmzTargetEnumEc2WindowsBarleyServiceCreateComponent CreateComponentXAmzTargetEnum = "EC2WindowsBarleyService.CreateComponent"
)

type CreateComponentHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateComponentRequest struct {
	Headers CreateComponentHeaders
	Request shared.CreateComponentRequest `request:"mediaType=application/json"`
}

type CreateComponentResponse struct {
	ContentType               string
	CreateComponentResponse   map[string]interface{}
	InternalServerException   *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
