package operations

type DeleteRoutePathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
}

type DeleteRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRouteRequest struct {
	PathParams DeleteRoutePathParams
	Headers    DeleteRouteHeaders
}

type DeleteRouteResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
