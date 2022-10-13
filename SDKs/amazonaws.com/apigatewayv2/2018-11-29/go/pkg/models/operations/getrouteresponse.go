package operations

import (
	"openapi/pkg/models/shared"
)

type GetRouteResponsePathParams struct {
	APIID           string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID         string `pathParam:"style=simple,explode=false,name=routeId"`
	RouteResponseID string `pathParam:"style=simple,explode=false,name=routeResponseId"`
}

type GetRouteResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRouteResponseRequest struct {
	PathParams GetRouteResponsePathParams
	Headers    GetRouteResponseHeaders
}

type GetRouteResponseResponse struct {
	ContentType              string
	GetRouteResponseResponse *shared.GetRouteResponseResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
