package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoutePathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
}

type GetRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRouteRequest struct {
	PathParams GetRoutePathParams
	Headers    GetRouteHeaders
}

type GetRouteResponse struct {
	ContentType              string
	GetRouteResult           *shared.GetRouteResult
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
