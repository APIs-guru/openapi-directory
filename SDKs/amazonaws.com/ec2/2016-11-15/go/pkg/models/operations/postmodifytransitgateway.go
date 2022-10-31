package operations




type PostModifyTransitGatewayActionEnum string

const (
    PostModifyTransitGatewayActionEnumModifyTransitGateway PostModifyTransitGatewayActionEnum = "ModifyTransitGateway"
)



type PostModifyTransitGatewayVersionEnum string

const (
    PostModifyTransitGatewayVersionEnumTwoThousandAndSixteen1115 PostModifyTransitGatewayVersionEnum = "2016-11-15"
)


type PostModifyTransitGatewayQueryParams struct {
    Action PostModifyTransitGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyTransitGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyTransitGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyTransitGatewayRequest struct {
    QueryParams PostModifyTransitGatewayQueryParams 
    Headers PostModifyTransitGatewayHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyTransitGatewayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

