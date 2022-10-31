package operations

import (
	"openapi/pkg/models/shared"
)

type EnableSsoXAmzTargetEnum string

const (
	EnableSsoXAmzTargetEnumDirectoryService20150416EnableSso EnableSsoXAmzTargetEnum = "DirectoryService_20150416.EnableSso"
)

type EnableSsoHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableSsoXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EnableSsoRequest struct {
	Headers EnableSsoHeaders
	Request shared.EnableSsoRequest `request:"mediaType=application/json"`
}

type EnableSsoResponse struct {
	AuthenticationFailedException    *interface{}
	ClientException                  *interface{}
	ContentType                      string
	EnableSsoResult                  map[string]interface{}
	EntityDoesNotExistException      *interface{}
	InsufficientPermissionsException *interface{}
	ServiceException                 *interface{}
	StatusCode                       int64
}
