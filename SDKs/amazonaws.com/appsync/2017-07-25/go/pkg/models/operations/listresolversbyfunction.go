package operations

import (
	"openapi/pkg/models/shared"
)

type ListResolversByFunctionPathParams struct {
	APIID      string `pathParam:"style=simple,explode=false,name=apiId"`
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type ListResolversByFunctionQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResolversByFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListResolversByFunctionRequest struct {
	PathParams  ListResolversByFunctionPathParams
	QueryParams ListResolversByFunctionQueryParams
	Headers     ListResolversByFunctionHeaders
}

type ListResolversByFunctionResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	ListResolversByFunctionResponse *shared.ListResolversByFunctionResponse
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
