package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCertificateAuthorityXAmzTargetEnum string

const (
	CreateCertificateAuthorityXAmzTargetEnumAcmPrivateCaCreateCertificateAuthority CreateCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.CreateCertificateAuthority"
)

type CreateCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCertificateAuthorityRequest struct {
	Headers CreateCertificateAuthorityHeaders
	Request shared.CreateCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type CreateCertificateAuthorityResponse struct {
	ContentType                        string
	CreateCertificateAuthorityResponse *shared.CreateCertificateAuthorityResponse
	InvalidArgsException               *interface{}
	InvalidPolicyException             *interface{}
	InvalidTagException                *interface{}
	LimitExceededException             *interface{}
	StatusCode                         int64
}
