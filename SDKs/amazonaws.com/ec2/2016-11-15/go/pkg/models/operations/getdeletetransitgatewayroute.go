package operations




type GetDeleteTransitGatewayRouteActionEnum string

const (
    GetDeleteTransitGatewayRouteActionEnumDeleteTransitGatewayRoute GetDeleteTransitGatewayRouteActionEnum = "DeleteTransitGatewayRoute"
)



type GetDeleteTransitGatewayRouteVersionEnum string

const (
    GetDeleteTransitGatewayRouteVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayRouteVersionEnum = "2016-11-15"
)


type GetDeleteTransitGatewayRouteQueryParams struct {
    Action GetDeleteTransitGatewayRouteActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DestinationCidrBlock string `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    TransitGatewayRouteTableID string `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
    Version GetDeleteTransitGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteTransitGatewayRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteTransitGatewayRouteRequest struct {
    QueryParams GetDeleteTransitGatewayRouteQueryParams 
    Headers GetDeleteTransitGatewayRouteHeaders 
    
}

type GetDeleteTransitGatewayRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

