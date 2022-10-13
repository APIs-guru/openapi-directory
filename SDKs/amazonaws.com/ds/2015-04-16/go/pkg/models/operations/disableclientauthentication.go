package operations

import (
	"openapi/pkg/models/shared"
)

type DisableClientAuthenticationXAmzTargetEnum string

const (
	DisableClientAuthenticationXAmzTargetEnumDirectoryService20150416DisableClientAuthentication DisableClientAuthenticationXAmzTargetEnum = "DirectoryService_20150416.DisableClientAuthentication"
)

type DisableClientAuthenticationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableClientAuthenticationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableClientAuthenticationRequest struct {
	Headers DisableClientAuthenticationHeaders
	Request shared.DisableClientAuthenticationRequest `request:"mediaType=application/json"`
}

type DisableClientAuthenticationResponse struct {
	AccessDeniedException             *interface{}
	ClientException                   *interface{}
	ContentType                       string
	DirectoryDoesNotExistException    *interface{}
	DisableClientAuthenticationResult map[string]interface{}
	InvalidClientAuthStatusException  *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	UnsupportedOperationException     *interface{}
}
