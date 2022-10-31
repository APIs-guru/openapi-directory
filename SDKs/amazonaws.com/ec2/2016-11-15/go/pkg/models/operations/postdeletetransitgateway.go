package operations




type PostDeleteTransitGatewayActionEnum string

const (
    PostDeleteTransitGatewayActionEnumDeleteTransitGateway PostDeleteTransitGatewayActionEnum = "DeleteTransitGateway"
)



type PostDeleteTransitGatewayVersionEnum string

const (
    PostDeleteTransitGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayVersionEnum = "2016-11-15"
)


type PostDeleteTransitGatewayQueryParams struct {
    Action PostDeleteTransitGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteTransitGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteTransitGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteTransitGatewayRequest struct {
    QueryParams PostDeleteTransitGatewayQueryParams 
    Headers PostDeleteTransitGatewayHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteTransitGatewayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

