package operations

import (
	"openapi/pkg/models/shared"
)

type EnableLdapsxAmzTargetEnum string

const (
	EnableLdapsxAmzTargetEnumDirectoryService20150416EnableLdaps EnableLdapsxAmzTargetEnum = "DirectoryService_20150416.EnableLDAPS"
)

type EnableLdapsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableLdapsxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EnableLdapsRequest struct {
	Headers EnableLdapsHeaders
	Request shared.EnableLdapsRequest `request:"mediaType=application/json"`
}

type EnableLdapsResponse struct {
	ClientException                 *interface{}
	ContentType                     string
	DirectoryDoesNotExistException  *interface{}
	DirectoryUnavailableException   *interface{}
	EnableLdapsResult               map[string]interface{}
	InvalidLdapsStatusException     *interface{}
	InvalidParameterException       *interface{}
	NoAvailableCertificateException *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnsupportedOperationException   *interface{}
}
