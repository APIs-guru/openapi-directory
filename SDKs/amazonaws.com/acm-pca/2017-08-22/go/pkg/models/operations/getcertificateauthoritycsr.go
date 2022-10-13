package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificateAuthorityCsrXAmzTargetEnum string

const (
	GetCertificateAuthorityCsrXAmzTargetEnumAcmPrivateCaGetCertificateAuthorityCsr GetCertificateAuthorityCsrXAmzTargetEnum = "ACMPrivateCA.GetCertificateAuthorityCsr"
)

type GetCertificateAuthorityCsrHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCertificateAuthorityCsrXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCertificateAuthorityCsrRequest struct {
	Headers GetCertificateAuthorityCsrHeaders
	Request shared.GetCertificateAuthorityCsrRequest `request:"mediaType=application/json"`
}

type GetCertificateAuthorityCsrResponse struct {
	ContentType                        string
	GetCertificateAuthorityCsrResponse *shared.GetCertificateAuthorityCsrResponse
	InvalidArnException                *interface{}
	InvalidStateException              *interface{}
	RequestFailedException             *interface{}
	RequestInProgressException         *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
