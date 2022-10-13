package operations

import (
	"openapi/pkg/models/shared"
)

type ListFunctionsPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type ListFunctionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFunctionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFunctionsRequest struct {
	PathParams  ListFunctionsPathParams
	QueryParams ListFunctionsQueryParams
	Headers     ListFunctionsHeaders
}

type ListFunctionsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	ListFunctionsResponse    *shared.ListFunctionsResponse
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
