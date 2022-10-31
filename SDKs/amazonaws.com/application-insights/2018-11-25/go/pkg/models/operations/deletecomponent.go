package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteComponentXAmzTargetEnum string

const (
	DeleteComponentXAmzTargetEnumEc2WindowsBarleyServiceDeleteComponent DeleteComponentXAmzTargetEnum = "EC2WindowsBarleyService.DeleteComponent"
)

type DeleteComponentHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteComponentRequest struct {
	Headers DeleteComponentHeaders
	Request shared.DeleteComponentRequest `request:"mediaType=application/json"`
}

type DeleteComponentResponse struct {
	ContentType               string
	DeleteComponentResponse   map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
