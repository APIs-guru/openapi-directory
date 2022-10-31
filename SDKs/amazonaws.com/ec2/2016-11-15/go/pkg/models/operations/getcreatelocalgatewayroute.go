package operations




type GetCreateLocalGatewayRouteActionEnum string

const (
    GetCreateLocalGatewayRouteActionEnumCreateLocalGatewayRoute GetCreateLocalGatewayRouteActionEnum = "CreateLocalGatewayRoute"
)



type GetCreateLocalGatewayRouteVersionEnum string

const (
    GetCreateLocalGatewayRouteVersionEnumTwoThousandAndSixteen1115 GetCreateLocalGatewayRouteVersionEnum = "2016-11-15"
)


type GetCreateLocalGatewayRouteQueryParams struct {
    Action GetCreateLocalGatewayRouteActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DestinationCidrBlock string `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    LocalGatewayRouteTableID string `queryParam:"style=form,explode=true,name=LocalGatewayRouteTableId"`
    LocalGatewayVirtualInterfaceGroupID string `queryParam:"style=form,explode=true,name=LocalGatewayVirtualInterfaceGroupId"`
    Version GetCreateLocalGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateLocalGatewayRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateLocalGatewayRouteRequest struct {
    QueryParams GetCreateLocalGatewayRouteQueryParams 
    Headers GetCreateLocalGatewayRouteHeaders 
    
}

type GetCreateLocalGatewayRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

