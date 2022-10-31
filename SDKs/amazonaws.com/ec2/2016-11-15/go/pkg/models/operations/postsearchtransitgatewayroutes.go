package operations




type PostSearchTransitGatewayRoutesActionEnum string

const (
    PostSearchTransitGatewayRoutesActionEnumSearchTransitGatewayRoutes PostSearchTransitGatewayRoutesActionEnum = "SearchTransitGatewayRoutes"
)



type PostSearchTransitGatewayRoutesVersionEnum string

const (
    PostSearchTransitGatewayRoutesVersionEnumTwoThousandAndSixteen1115 PostSearchTransitGatewayRoutesVersionEnum = "2016-11-15"
)


type PostSearchTransitGatewayRoutesQueryParams struct {
    Action PostSearchTransitGatewayRoutesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSearchTransitGatewayRoutesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSearchTransitGatewayRoutesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSearchTransitGatewayRoutesRequest struct {
    QueryParams PostSearchTransitGatewayRoutesQueryParams 
    Headers PostSearchTransitGatewayRoutesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSearchTransitGatewayRoutesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

