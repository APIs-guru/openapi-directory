package operations




type PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum string

const (
    PostDeleteLocalGatewayRouteTableVpcAssociationActionEnumDeleteLocalGatewayRouteTableVpcAssociation PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum = "DeleteLocalGatewayRouteTableVpcAssociation"
)



type PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum string

const (
    PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnumTwoThousandAndSixteen1115 PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum = "2016-11-15"
)


type PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams struct {
    Action PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteLocalGatewayRouteTableVpcAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteLocalGatewayRouteTableVpcAssociationRequest struct {
    QueryParams PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams 
    Headers PostDeleteLocalGatewayRouteTableVpcAssociationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteLocalGatewayRouteTableVpcAssociationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

