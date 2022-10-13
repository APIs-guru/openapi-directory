package operations

import (
	"openapi/pkg/models/shared"
)

type DisableSsoXAmzTargetEnum string

const (
	DisableSsoXAmzTargetEnumDirectoryService20150416DisableSso DisableSsoXAmzTargetEnum = "DirectoryService_20150416.DisableSso"
)

type DisableSsoHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableSsoXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableSsoRequest struct {
	Headers DisableSsoHeaders
	Request shared.DisableSsoRequest `request:"mediaType=application/json"`
}

type DisableSsoResponse struct {
	AuthenticationFailedException    *interface{}
	ClientException                  *interface{}
	ContentType                      string
	DisableSsoResult                 map[string]interface{}
	EntityDoesNotExistException      *interface{}
	InsufficientPermissionsException *interface{}
	ServiceException                 *interface{}
	StatusCode                       int64
}
