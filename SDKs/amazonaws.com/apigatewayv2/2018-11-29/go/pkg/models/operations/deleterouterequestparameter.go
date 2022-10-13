package operations

type DeleteRouteRequestParameterPathParams struct {
	APIID               string `pathParam:"style=simple,explode=false,name=apiId"`
	RequestParameterKey string `pathParam:"style=simple,explode=false,name=requestParameterKey"`
	RouteID             string `pathParam:"style=simple,explode=false,name=routeId"`
}

type DeleteRouteRequestParameterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRouteRequestParameterRequest struct {
	PathParams DeleteRouteRequestParameterPathParams
	Headers    DeleteRouteRequestParameterHeaders
}

type DeleteRouteRequestParameterResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
