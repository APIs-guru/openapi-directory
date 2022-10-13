package operations

import (
	"openapi/pkg/models/shared"
)

type ImportCertificateAuthorityCertificateXAmzTargetEnum string

const (
	ImportCertificateAuthorityCertificateXAmzTargetEnumAcmPrivateCaImportCertificateAuthorityCertificate ImportCertificateAuthorityCertificateXAmzTargetEnum = "ACMPrivateCA.ImportCertificateAuthorityCertificate"
)

type ImportCertificateAuthorityCertificateHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportCertificateAuthorityCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportCertificateAuthorityCertificateRequest struct {
	Headers ImportCertificateAuthorityCertificateHeaders
	Request shared.ImportCertificateAuthorityCertificateRequest `request:"mediaType=application/json"`
}

type ImportCertificateAuthorityCertificateResponse struct {
	CertificateMismatchException    *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArnException             *interface{}
	InvalidRequestException         *interface{}
	InvalidStateException           *interface{}
	MalformedCertificateException   *interface{}
	RequestFailedException          *interface{}
	RequestInProgressException      *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
