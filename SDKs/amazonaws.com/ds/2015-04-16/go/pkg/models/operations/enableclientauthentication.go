package operations

import (
	"openapi/pkg/models/shared"
)

type EnableClientAuthenticationXAmzTargetEnum string

const (
	EnableClientAuthenticationXAmzTargetEnumDirectoryService20150416EnableClientAuthentication EnableClientAuthenticationXAmzTargetEnum = "DirectoryService_20150416.EnableClientAuthentication"
)

type EnableClientAuthenticationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableClientAuthenticationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableClientAuthenticationRequest struct {
	Headers EnableClientAuthenticationHeaders
	Request shared.EnableClientAuthenticationRequest `request:"mediaType=application/json"`
}

type EnableClientAuthenticationResponse struct {
	AccessDeniedException            *interface{}
	ClientException                  *interface{}
	ContentType                      string
	DirectoryDoesNotExistException   *interface{}
	EnableClientAuthenticationResult map[string]interface{}
	InvalidClientAuthStatusException *interface{}
	NoAvailableCertificateException  *interface{}
	ServiceException                 *interface{}
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
