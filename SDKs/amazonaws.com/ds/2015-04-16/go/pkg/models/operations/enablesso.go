package operations

import (
	"openapi/pkg/models/shared"
)

type EnableSsoXAmzTargetEnum string

const (
	EnableSsoXAmzTargetEnumDirectoryService20150416EnableSso EnableSsoXAmzTargetEnum = "DirectoryService_20150416.EnableSso"
)

type EnableSsoHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableSsoXAmzTargetEnum `header:"name=X-Amz-Target"`
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
