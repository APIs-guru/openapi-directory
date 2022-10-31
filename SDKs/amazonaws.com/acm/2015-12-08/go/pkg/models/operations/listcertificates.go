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
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCertificatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
