package operations




type PostDescribeLoadBalancerAttributesActionEnum string

const (
    PostDescribeLoadBalancerAttributesActionEnumDescribeLoadBalancerAttributes PostDescribeLoadBalancerAttributesActionEnum = "DescribeLoadBalancerAttributes"
)



type PostDescribeLoadBalancerAttributesVersionEnum string

const (
    PostDescribeLoadBalancerAttributesVersionEnumTwoThousandAndTwelve0601 PostDescribeLoadBalancerAttributesVersionEnum = "2012-06-01"
)


type PostDescribeLoadBalancerAttributesQueryParams struct {
    Action PostDescribeLoadBalancerAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeLoadBalancerAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLoadBalancerAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLoadBalancerAttributesRequest struct {
    QueryParams PostDescribeLoadBalancerAttributesQueryParams 
    Headers PostDescribeLoadBalancerAttributesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLoadBalancerAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

