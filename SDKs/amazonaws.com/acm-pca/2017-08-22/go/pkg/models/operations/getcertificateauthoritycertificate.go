package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificateAuthorityCertificateXAmzTargetEnum string

const (
	GetCertificateAuthorityCertificateXAmzTargetEnumAcmPrivateCaGetCertificateAuthorityCertificate GetCertificateAuthorityCertificateXAmzTargetEnum = "ACMPrivateCA.GetCertificateAuthorityCertificate"
)

type GetCertificateAuthorityCertificateHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCertificateAuthorityCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCertificateAuthorityCertificateRequest struct {
	Headers GetCertificateAuthorityCertificateHeaders
	Request shared.GetCertificateAuthorityCertificateRequest `request:"mediaType=application/json"`
}

type GetCertificateAuthorityCertificateResponse struct {
	ContentType                                string
	GetCertificateAuthorityCertificateResponse *shared.GetCertificateAuthorityCertificateResponse
	InvalidArnException                        *interface{}
	InvalidStateException                      *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
}
