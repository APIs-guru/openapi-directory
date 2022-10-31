package operations




type GetCreateVpnConnectionRouteActionEnum string

const (
    GetCreateVpnConnectionRouteActionEnumCreateVpnConnectionRoute GetCreateVpnConnectionRouteActionEnum = "CreateVpnConnectionRoute"
)



type GetCreateVpnConnectionRouteVersionEnum string

const (
    GetCreateVpnConnectionRouteVersionEnumTwoThousandAndSixteen1115 GetCreateVpnConnectionRouteVersionEnum = "2016-11-15"
)


type GetCreateVpnConnectionRouteQueryParams struct {
    Action GetCreateVpnConnectionRouteActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DestinationCidrBlock string `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
    Version GetCreateVpnConnectionRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpnConnectionID string `queryParam:"style=form,explode=true,name=VpnConnectionId"`
    
}

type GetCreateVpnConnectionRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateVpnConnectionRouteRequest struct {
    QueryParams GetCreateVpnConnectionRouteQueryParams 
    Headers GetCreateVpnConnectionRouteHeaders 
    
}

type GetCreateVpnConnectionRouteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

