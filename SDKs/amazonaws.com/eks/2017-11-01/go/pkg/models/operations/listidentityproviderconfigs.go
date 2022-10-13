package operations

import (
	"openapi/pkg/models/shared"
)

type ListIdentityProviderConfigsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ListIdentityProviderConfigsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListIdentityProviderConfigsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListIdentityProviderConfigsRequest struct {
	PathParams  ListIdentityProviderConfigsPathParams
	QueryParams ListIdentityProviderConfigsQueryParams
	Headers     ListIdentityProviderConfigsHeaders
}

type ListIdentityProviderConfigsResponse struct {
	ClientException                     *interface{}
	ContentType                         string
	InvalidParameterException           *interface{}
	ListIdentityProviderConfigsResponse *shared.ListIdentityProviderConfigsResponse
	ResourceNotFoundException           *interface{}
	ServerException                     *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
}
