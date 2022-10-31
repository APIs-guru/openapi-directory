package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApplicationXAmzTargetEnum string

const (
	UpdateApplicationXAmzTargetEnumEc2WindowsBarleyServiceUpdateApplication UpdateApplicationXAmzTargetEnum = "EC2WindowsBarleyService.UpdateApplication"
)

type UpdateApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
