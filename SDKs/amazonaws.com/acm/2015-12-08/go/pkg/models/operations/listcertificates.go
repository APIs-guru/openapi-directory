package operations

import (
	"openapi/pkg/models/shared"
)

type ListCertificatesQueryParams struct {
	MaxItems  *string `queryParam:"style=form,explode=true,name=MaxItems"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCertificatesXAmzTargetEnum string

const (
	ListCertificatesXAmzTargetEnumCertificateManagerListCertificates ListCertificatesXAmzTargetEnum = "CertificateManager.ListCertificates"
)

type ListCertificatesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCertificatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCertificatesRequest struct {
	QueryParams ListCertificatesQueryParams
	Headers     ListCertificatesHeaders
	Request     shared.ListCertificatesRequest `request:"mediaType=application/json"`
}

type ListCertificatesResponse struct {
	ContentType              string
	InvalidArgsException     *interface{}
	ListCertificatesResponse *shared.ListCertificatesResponse
	StatusCode               int64
}
