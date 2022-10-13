package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCertificateAuthorityXAmzTargetEnum string

const (
	DescribeCertificateAuthorityXAmzTargetEnumAcmPrivateCaDescribeCertificateAuthority DescribeCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.DescribeCertificateAuthority"
)

type DescribeCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCertificateAuthorityRequest struct {
	Headers DescribeCertificateAuthorityHeaders
	Request shared.DescribeCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type DescribeCertificateAuthorityResponse struct {
	ContentType                          string
	DescribeCertificateAuthorityResponse *shared.DescribeCertificateAuthorityResponse
	InvalidArnException                  *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
