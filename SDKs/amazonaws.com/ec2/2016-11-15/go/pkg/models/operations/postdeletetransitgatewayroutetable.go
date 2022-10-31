package operations




type PostDeleteTransitGatewayRouteTableActionEnum string

const (
    PostDeleteTransitGatewayRouteTableActionEnumDeleteTransitGatewayRouteTable PostDeleteTransitGatewayRouteTableActionEnum = "DeleteTransitGatewayRouteTable"
)



type PostDeleteTransitGatewayRouteTableVersionEnum string

const (
    PostDeleteTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayRouteTableVersionEnum = "2016-11-15"
)


type PostDeleteTransitGatewayRouteTableQueryParams struct {
    Action PostDeleteTransitGatewayRouteTableActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteTransitGatewayRouteTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteTransitGatewayRouteTableRequest struct {
    QueryParams PostDeleteTransitGatewayRouteTableQueryParams 
    Headers PostDeleteTransitGatewayRouteTableHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteTransitGatewayRouteTableResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

