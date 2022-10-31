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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
