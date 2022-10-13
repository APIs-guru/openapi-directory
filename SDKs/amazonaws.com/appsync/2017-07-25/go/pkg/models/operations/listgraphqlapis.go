package operations

import (
	"openapi/pkg/models/shared"
)

type ListGraphqlApisQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListGraphqlApisHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListGraphqlApisRequest struct {
	QueryParams ListGraphqlApisQueryParams
	Headers     ListGraphqlApisHeaders
}

type ListGraphqlApisResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	ListGraphqlApisResponse  *shared.ListGraphqlApisResponse
	StatusCode               int64
	UnauthorizedException    *interface{}
}
