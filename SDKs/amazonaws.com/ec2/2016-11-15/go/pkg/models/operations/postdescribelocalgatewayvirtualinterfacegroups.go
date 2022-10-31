package operations




type PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum string

const (
    PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnumDescribeLocalGatewayVirtualInterfaceGroups PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum = "DescribeLocalGatewayVirtualInterfaceGroups"
)



type PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum string

const (
    PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnumTwoThousandAndSixteen1115 PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum = "2016-11-15"
)


type PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams struct {
    Action PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLocalGatewayVirtualInterfaceGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLocalGatewayVirtualInterfaceGroupsRequest struct {
    QueryParams PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams 
    Headers PostDescribeLocalGatewayVirtualInterfaceGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLocalGatewayVirtualInterfaceGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

