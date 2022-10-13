package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCertificateAuthorityXAmzTargetEnum string

const (
	UpdateCertificateAuthorityXAmzTargetEnumAcmPrivateCaUpdateCertificateAuthority UpdateCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.UpdateCertificateAuthority"
)

type UpdateCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCertificateAuthorityRequest struct {
	Headers UpdateCertificateAuthorityHeaders
	Request shared.UpdateCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type UpdateCertificateAuthorityResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArgsException            *interface{}
	InvalidArnException             *interface{}
	InvalidPolicyException          *interface{}
	InvalidStateException           *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
