package operations

import (
	"openapi/pkg/models/shared"
)

type ListCertificateAuthoritiesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCertificateAuthoritiesXAmzTargetEnum string

const (
	ListCertificateAuthoritiesXAmzTargetEnumAcmPrivateCaListCertificateAuthorities ListCertificateAuthoritiesXAmzTargetEnum = "ACMPrivateCA.ListCertificateAuthorities"
)

type ListCertificateAuthoritiesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCertificateAuthoritiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCertificateAuthoritiesRequest struct {
	QueryParams ListCertificateAuthoritiesQueryParams
	Headers     ListCertificateAuthoritiesHeaders
	Request     shared.ListCertificateAuthoritiesRequest `request:"mediaType=application/json"`
}

type ListCertificateAuthoritiesResponse struct {
	ContentType                        string
	InvalidNextTokenException          *interface{}
	ListCertificateAuthoritiesResponse *shared.ListCertificateAuthoritiesResponse
	StatusCode                         int64
}
