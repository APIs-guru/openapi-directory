package operations




type GetDeleteVpnGatewayActionEnum string

const (
    GetDeleteVpnGatewayActionEnumDeleteVpnGateway GetDeleteVpnGatewayActionEnum = "DeleteVpnGateway"
)



type GetDeleteVpnGatewayVersionEnum string

const (
    GetDeleteVpnGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteVpnGatewayVersionEnum = "2016-11-15"
)


type GetDeleteVpnGatewayQueryParams struct {
    Action GetDeleteVpnGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDeleteVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpnGatewayID string `queryParam:"style=form,explode=true,name=VpnGatewayId"`
    
}

type GetDeleteVpnGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteVpnGatewayRequest struct {
    QueryParams GetDeleteVpnGatewayQueryParams 
    Headers GetDeleteVpnGatewayHeaders 
    
}

type GetDeleteVpnGatewayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

