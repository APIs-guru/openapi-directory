package operations




type PostDescribeTransitGatewaysActionEnum string

const (
    PostDescribeTransitGatewaysActionEnumDescribeTransitGateways PostDescribeTransitGatewaysActionEnum = "DescribeTransitGateways"
)



type PostDescribeTransitGatewaysVersionEnum string

const (
    PostDescribeTransitGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewaysVersionEnum = "2016-11-15"
)


type PostDescribeTransitGatewaysQueryParams struct {
    Action PostDescribeTransitGatewaysActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeTransitGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeTransitGatewaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeTransitGatewaysRequest struct {
    QueryParams PostDescribeTransitGatewaysQueryParams 
    Headers PostDescribeTransitGatewaysHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeTransitGatewaysResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

