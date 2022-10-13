package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCertificateAuthorityXAmzTargetEnum string

const (
	DeleteCertificateAuthorityXAmzTargetEnumAcmPrivateCaDeleteCertificateAuthority DeleteCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.DeleteCertificateAuthority"
)

type DeleteCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCertificateAuthorityRequest struct {
	Headers DeleteCertificateAuthorityHeaders
	Request shared.DeleteCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type DeleteCertificateAuthorityResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArnException             *interface{}
	InvalidStateException           *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
