package operations

type DeleteRouteSettingsPathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteKey  string `pathParam:"style=simple,explode=false,name=routeKey"`
	StageName string `pathParam:"style=simple,explode=false,name=stageName"`
}

type DeleteRouteSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
