package operations




type PostDescribeInternetGatewaysActionEnum string

const (
    PostDescribeInternetGatewaysActionEnumDescribeInternetGateways PostDescribeInternetGatewaysActionEnum = "DescribeInternetGateways"
)



type PostDescribeInternetGatewaysVersionEnum string

const (
    PostDescribeInternetGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeInternetGatewaysVersionEnum = "2016-11-15"
)


type PostDescribeInternetGatewaysQueryParams struct {
    Action PostDescribeInternetGatewaysActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeInternetGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInternetGatewaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInternetGatewaysRequest struct {
    QueryParams PostDescribeInternetGatewaysQueryParams 
    Headers PostDescribeInternetGatewaysHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInternetGatewaysResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

