package operations

import (
	"openapi/pkg/models/shared"
)

type DisableClientAuthenticationXAmzTargetEnum string

const (
	DisableClientAuthenticationXAmzTargetEnumDirectoryService20150416DisableClientAuthentication DisableClientAuthenticationXAmzTargetEnum = "DirectoryService_20150416.DisableClientAuthentication"
)

type DisableClientAuthenticationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableClientAuthenticationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
