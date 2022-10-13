package operations

import (
	"openapi/pkg/models/shared"
)

type ListOutgoingCertificatesQueryParams struct {
	IsAscendingOrder *bool   `queryParam:"style=form,explode=true,name=isAscendingOrder"`
	Marker           *string `queryParam:"style=form,explode=true,name=marker"`
	PageSize         *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type ListOutgoingCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListOutgoingCertificatesRequest struct {
	QueryParams ListOutgoingCertificatesQueryParams
	Headers     ListOutgoingCertificatesHeaders
}

type ListOutgoingCertificatesResponse struct {
	ContentType                      string
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ListOutgoingCertificatesResponse *shared.ListOutgoingCertificatesResponse
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UnauthorizedException            *interface{}
}
