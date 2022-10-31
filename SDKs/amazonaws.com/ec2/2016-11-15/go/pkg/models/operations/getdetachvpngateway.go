package operations




type GetDetachVpnGatewayActionEnum string

const (
    GetDetachVpnGatewayActionEnumDetachVpnGateway GetDetachVpnGatewayActionEnum = "DetachVpnGateway"
)



type GetDetachVpnGatewayVersionEnum string

const (
    GetDetachVpnGatewayVersionEnumTwoThousandAndSixteen1115 GetDetachVpnGatewayVersionEnum = "2016-11-15"
)


type GetDetachVpnGatewayQueryParams struct {
    Action GetDetachVpnGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDetachVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcID string `queryParam:"style=form,explode=true,name=VpcId"`
    VpnGatewayID string `queryParam:"style=form,explode=true,name=VpnGatewayId"`
    
}

type GetDetachVpnGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDetachVpnGatewayRequest struct {
    QueryParams GetDetachVpnGatewayQueryParams 
    Headers GetDetachVpnGatewayHeaders 
    
}

type GetDetachVpnGatewayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

