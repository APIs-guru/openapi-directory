package operations




type PostDescribeLocalGatewayRouteTablesActionEnum string

const (
    PostDescribeLocalGatewayRouteTablesActionEnumDescribeLocalGatewayRouteTables PostDescribeLocalGatewayRouteTablesActionEnum = "DescribeLocalGatewayRouteTables"
)



type PostDescribeLocalGatewayRouteTablesVersionEnum string

const (
    PostDescribeLocalGatewayRouteTablesVersionEnumTwoThousandAndSixteen1115 PostDescribeLocalGatewayRouteTablesVersionEnum = "2016-11-15"
)


type PostDescribeLocalGatewayRouteTablesQueryParams struct {
    Action PostDescribeLocalGatewayRouteTablesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeLocalGatewayRouteTablesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLocalGatewayRouteTablesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLocalGatewayRouteTablesRequest struct {
    QueryParams PostDescribeLocalGatewayRouteTablesQueryParams 
    Headers PostDescribeLocalGatewayRouteTablesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLocalGatewayRouteTablesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

