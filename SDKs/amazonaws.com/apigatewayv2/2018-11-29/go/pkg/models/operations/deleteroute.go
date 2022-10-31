package operations



type DeleteRoutePathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
    
}

type DeleteRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteRouteRequest struct {
    PathParams DeleteRoutePathParams 
    Headers DeleteRouteHeaders 
    
}

type DeleteRouteResponse struct {
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

