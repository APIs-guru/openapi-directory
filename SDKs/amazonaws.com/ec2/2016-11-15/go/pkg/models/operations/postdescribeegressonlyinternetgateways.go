package operations




type PostDescribeEgressOnlyInternetGatewaysActionEnum string

const (
    PostDescribeEgressOnlyInternetGatewaysActionEnumDescribeEgressOnlyInternetGateways PostDescribeEgressOnlyInternetGatewaysActionEnum = "DescribeEgressOnlyInternetGateways"
)



type PostDescribeEgressOnlyInternetGatewaysVersionEnum string

const (
    PostDescribeEgressOnlyInternetGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeEgressOnlyInternetGatewaysVersionEnum = "2016-11-15"
)


type PostDescribeEgressOnlyInternetGatewaysQueryParams struct {
    Action PostDescribeEgressOnlyInternetGatewaysActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeEgressOnlyInternetGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEgressOnlyInternetGatewaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEgressOnlyInternetGatewaysRequest struct {
    QueryParams PostDescribeEgressOnlyInternetGatewaysQueryParams 
    Headers PostDescribeEgressOnlyInternetGatewaysHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEgressOnlyInternetGatewaysResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

