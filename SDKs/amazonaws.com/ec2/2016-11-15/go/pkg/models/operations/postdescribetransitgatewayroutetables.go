package operations




type PostDescribeTransitGatewayRouteTablesActionEnum string

const (
    PostDescribeTransitGatewayRouteTablesActionEnumDescribeTransitGatewayRouteTables PostDescribeTransitGatewayRouteTablesActionEnum = "DescribeTransitGatewayRouteTables"
)



type PostDescribeTransitGatewayRouteTablesVersionEnum string

const (
    PostDescribeTransitGatewayRouteTablesVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayRouteTablesVersionEnum = "2016-11-15"
)


type PostDescribeTransitGatewayRouteTablesQueryParams struct {
    Action PostDescribeTransitGatewayRouteTablesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeTransitGatewayRouteTablesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeTransitGatewayRouteTablesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeTransitGatewayRouteTablesRequest struct {
    QueryParams PostDescribeTransitGatewayRouteTablesQueryParams 
    Headers PostDescribeTransitGatewayRouteTablesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeTransitGatewayRouteTablesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

