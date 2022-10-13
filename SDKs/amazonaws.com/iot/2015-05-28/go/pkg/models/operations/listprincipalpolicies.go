package operations

import (
	"openapi/pkg/models/shared"
)

type ListPrincipalPoliciesQueryParams struct {
	IsAscendingOrder *bool   `queryParam:"style=form,explode=true,name=isAscendingOrder"`
	Marker           *string `queryParam:"style=form,explode=true,name=marker"`
	PageSize         *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type ListPrincipalPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznIotPrincipal string  `header:"name=x-amzn-iot-principal"`
}

type ListPrincipalPoliciesRequest struct {
	QueryParams ListPrincipalPoliciesQueryParams
	Headers     ListPrincipalPoliciesHeaders
}

type ListPrincipalPoliciesResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ListPrincipalPoliciesResponse *shared.ListPrincipalPoliciesResponse
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnauthorizedException         *interface{}
}
