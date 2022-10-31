package operations




type PostDeleteVpnGatewayActionEnum string

const (
    PostDeleteVpnGatewayActionEnumDeleteVpnGateway PostDeleteVpnGatewayActionEnum = "DeleteVpnGateway"
)



type PostDeleteVpnGatewayVersionEnum string

const (
    PostDeleteVpnGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteVpnGatewayVersionEnum = "2016-11-15"
)


type PostDeleteVpnGatewayQueryParams struct {
    Action PostDeleteVpnGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteVpnGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteVpnGatewayRequest struct {
    QueryParams PostDeleteVpnGatewayQueryParams 
    Headers PostDeleteVpnGatewayHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteVpnGatewayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

