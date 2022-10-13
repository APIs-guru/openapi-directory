package operations

import (
	"openapi/pkg/models/shared"
)

type GetRouteResponsesPathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
}

type GetRouteResponsesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetRouteResponsesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRouteResponsesRequest struct {
	PathParams  GetRouteResponsesPathParams
	QueryParams GetRouteResponsesQueryParams
	Headers     GetRouteResponsesHeaders
}

type GetRouteResponsesResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	GetRouteResponsesResponse *shared.GetRouteResponsesResponse
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
