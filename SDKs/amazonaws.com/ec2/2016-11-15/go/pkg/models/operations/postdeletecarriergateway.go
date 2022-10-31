package operations




type PostDeleteCarrierGatewayActionEnum string

const (
    PostDeleteCarrierGatewayActionEnumDeleteCarrierGateway PostDeleteCarrierGatewayActionEnum = "DeleteCarrierGateway"
)



type PostDeleteCarrierGatewayVersionEnum string

const (
    PostDeleteCarrierGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteCarrierGatewayVersionEnum = "2016-11-15"
)


type PostDeleteCarrierGatewayQueryParams struct {
    Action PostDeleteCarrierGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteCarrierGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteCarrierGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteCarrierGatewayRequest struct {
    QueryParams PostDeleteCarrierGatewayQueryParams 
    Headers PostDeleteCarrierGatewayHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteCarrierGatewayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

