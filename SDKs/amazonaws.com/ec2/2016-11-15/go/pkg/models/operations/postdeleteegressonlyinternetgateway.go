package operations




type PostDeleteEgressOnlyInternetGatewayActionEnum string

const (
    PostDeleteEgressOnlyInternetGatewayActionEnumDeleteEgressOnlyInternetGateway PostDeleteEgressOnlyInternetGatewayActionEnum = "DeleteEgressOnlyInternetGateway"
)



type PostDeleteEgressOnlyInternetGatewayVersionEnum string

const (
    PostDeleteEgressOnlyInternetGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteEgressOnlyInternetGatewayVersionEnum = "2016-11-15"
)


type PostDeleteEgressOnlyInternetGatewayQueryParams struct {
    Action PostDeleteEgressOnlyInternetGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteEgressOnlyInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteEgressOnlyInternetGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteEgressOnlyInternetGatewayRequest struct {
    QueryParams PostDeleteEgressOnlyInternetGatewayQueryParams 
    Headers PostDeleteEgressOnlyInternetGatewayHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteEgressOnlyInternetGatewayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

