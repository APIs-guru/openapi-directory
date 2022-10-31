package operations




type PostDeleteTransitGatewayRouteActionEnum string

const (
    PostDeleteTransitGatewayRouteActionEnumDeleteTransitGatewayRoute PostDeleteTransitGatewayRouteActionEnum = "DeleteTransitGatewayRoute"
)



type PostDeleteTransitGatewayRouteVersionEnum string

const (
    PostDeleteTransitGatewayRouteVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayRouteVersionEnum = "2016-11-15"
)


type PostDeleteTransitGatewayRouteQueryParams struct {
    Action PostDeleteTransitGatewayRouteActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteTransitGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteTransitGatewayRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteTransitGatewayRouteRequest struct {
    QueryParams PostDeleteTransitGatewayRouteQueryParams 
    Headers PostDeleteTransitGatewayRouteHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteTransitGatewayRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

