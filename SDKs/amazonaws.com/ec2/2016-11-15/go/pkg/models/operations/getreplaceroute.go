package operations




type GetReplaceRouteActionEnum string

const (
    GetReplaceRouteActionEnumReplaceRoute GetReplaceRouteActionEnum = "ReplaceRoute"
)



type GetReplaceRouteVersionEnum string

const (
    GetReplaceRouteVersionEnumTwoThousandAndSixteen1115 GetReplaceRouteVersionEnum = "2016-11-15"
)


type GetReplaceRouteQueryParams struct {
    Action GetReplaceRouteActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CarrierGatewayID *string `queryParam:"style=form,explode=true,name=CarrierGatewayId"`
    DestinationCidrBlock *string `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
    DestinationIpv6CidrBlock *string `queryParam:"style=form,explode=true,name=DestinationIpv6CidrBlock"`
    DestinationPrefixListID *string `queryParam:"style=form,explode=true,name=DestinationPrefixListId"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    EgressOnlyInternetGatewayID *string `queryParam:"style=form,explode=true,name=EgressOnlyInternetGatewayId"`
    GatewayID *string `queryParam:"style=form,explode=true,name=GatewayId"`
    InstanceID *string `queryParam:"style=form,explode=true,name=InstanceId"`
    LocalGatewayID *string `queryParam:"style=form,explode=true,name=LocalGatewayId"`
    LocalTarget *bool `queryParam:"style=form,explode=true,name=LocalTarget"`
    NatGatewayID *string `queryParam:"style=form,explode=true,name=NatGatewayId"`
    NetworkInterfaceID *string `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
    RouteTableID string `queryParam:"style=form,explode=true,name=RouteTableId"`
    TransitGatewayID *string `queryParam:"style=form,explode=true,name=TransitGatewayId"`
    Version GetReplaceRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcEndpointID *string `queryParam:"style=form,explode=true,name=VpcEndpointId"`
    VpcPeeringConnectionID *string `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
    
}

type GetReplaceRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetReplaceRouteRequest struct {
    QueryParams GetReplaceRouteQueryParams 
    Headers GetReplaceRouteHeaders 
    
}

type GetReplaceRouteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

