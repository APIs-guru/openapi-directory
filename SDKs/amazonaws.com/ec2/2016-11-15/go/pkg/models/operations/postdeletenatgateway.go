package operations




type PostDeleteNatGatewayActionEnum string

const (
    PostDeleteNatGatewayActionEnumDeleteNatGateway PostDeleteNatGatewayActionEnum = "DeleteNatGateway"
)



type PostDeleteNatGatewayVersionEnum string

const (
    PostDeleteNatGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteNatGatewayVersionEnum = "2016-11-15"
)


type PostDeleteNatGatewayQueryParams struct {
    Action PostDeleteNatGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteNatGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteNatGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteNatGatewayRequest struct {
    QueryParams PostDeleteNatGatewayQueryParams 
    Headers PostDeleteNatGatewayHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteNatGatewayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

