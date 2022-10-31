package operations

import (
	"openapi/pkg/models/shared"
)

type EnableClientAuthenticationXAmzTargetEnum string

const (
	EnableClientAuthenticationXAmzTargetEnumDirectoryService20150416EnableClientAuthentication EnableClientAuthenticationXAmzTargetEnum = "DirectoryService_20150416.EnableClientAuthentication"
)

type EnableClientAuthenticationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableClientAuthenticationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
