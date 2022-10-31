package operations




type PostDescribeLocalGatewayVirtualInterfacesActionEnum string

const (
    PostDescribeLocalGatewayVirtualInterfacesActionEnumDescribeLocalGatewayVirtualInterfaces PostDescribeLocalGatewayVirtualInterfacesActionEnum = "DescribeLocalGatewayVirtualInterfaces"
)



type PostDescribeLocalGatewayVirtualInterfacesVersionEnum string

const (
    PostDescribeLocalGatewayVirtualInterfacesVersionEnumTwoThousandAndSixteen1115 PostDescribeLocalGatewayVirtualInterfacesVersionEnum = "2016-11-15"
)


type PostDescribeLocalGatewayVirtualInterfacesQueryParams struct {
    Action PostDescribeLocalGatewayVirtualInterfacesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeLocalGatewayVirtualInterfacesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLocalGatewayVirtualInterfacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLocalGatewayVirtualInterfacesRequest struct {
    QueryParams PostDescribeLocalGatewayVirtualInterfacesQueryParams 
    Headers PostDescribeLocalGatewayVirtualInterfacesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLocalGatewayVirtualInterfacesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

