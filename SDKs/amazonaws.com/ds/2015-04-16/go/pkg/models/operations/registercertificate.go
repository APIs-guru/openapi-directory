package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterCertificateXAmzTargetEnum string

const (
	RegisterCertificateXAmzTargetEnumDirectoryService20150416RegisterCertificate RegisterCertificateXAmzTargetEnum = "DirectoryService_20150416.RegisterCertificate"
)

type RegisterCertificateHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterCertificateRequest struct {
	Headers RegisterCertificateHeaders
	Request shared.RegisterCertificateRequest `request:"mediaType=application/json"`
}

type RegisterCertificateResponse struct {
	CertificateAlreadyExistsException *interface{}
	CertificateLimitExceededException *interface{}
	ClientException                   *interface{}
	ContentType                       string
	DirectoryDoesNotExistException    *interface{}
	DirectoryUnavailableException     *interface{}
	InvalidCertificateException       *interface{}
	InvalidParameterException         *interface{}
	RegisterCertificateResult         *shared.RegisterCertificateResult
	ServiceException                  *interface{}
	StatusCode                        int64
	UnsupportedOperationException     *interface{}
}
