package operations




type PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum string

const (
    PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnumDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum = "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"
)



type PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum string

const (
    PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnumTwoThousandAndSixteen1115 PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum = "2016-11-15"
)


type PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams struct {
    Action PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest struct {
    QueryParams PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams 
    Headers PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

