package operations




type PostDescribeLocalGatewaysActionEnum string

const (
    PostDescribeLocalGatewaysActionEnumDescribeLocalGateways PostDescribeLocalGatewaysActionEnum = "DescribeLocalGateways"
)



type PostDescribeLocalGatewaysVersionEnum string

const (
    PostDescribeLocalGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeLocalGatewaysVersionEnum = "2016-11-15"
)


type PostDescribeLocalGatewaysQueryParams struct {
    Action PostDescribeLocalGatewaysActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeLocalGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLocalGatewaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLocalGatewaysRequest struct {
    QueryParams PostDescribeLocalGatewaysQueryParams 
    Headers PostDescribeLocalGatewaysHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLocalGatewaysResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

