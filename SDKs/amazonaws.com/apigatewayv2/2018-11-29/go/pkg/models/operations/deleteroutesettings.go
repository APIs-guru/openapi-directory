package operations

type DeleteRouteSettingsPathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteKey  string `pathParam:"style=simple,explode=false,name=routeKey"`
	StageName string `pathParam:"style=simple,explode=false,name=stageName"`
}

type DeleteRouteSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRouteSettingsRequest struct {
	PathParams DeleteRouteSettingsPathParams
	Headers    DeleteRouteSettingsHeaders
}

type DeleteRouteSettingsResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
