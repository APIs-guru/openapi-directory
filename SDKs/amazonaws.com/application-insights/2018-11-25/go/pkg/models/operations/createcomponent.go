package operations

import (
	"openapi/pkg/models/shared"
)

type CreateComponentXAmzTargetEnum string

const (
	CreateComponentXAmzTargetEnumEc2WindowsBarleyServiceCreateComponent CreateComponentXAmzTargetEnum = "EC2WindowsBarleyService.CreateComponent"
)

type CreateComponentHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
