package operations




type GetDescribeLoadBalancerAttributesActionEnum string

const (
    GetDescribeLoadBalancerAttributesActionEnumDescribeLoadBalancerAttributes GetDescribeLoadBalancerAttributesActionEnum = "DescribeLoadBalancerAttributes"
)



type GetDescribeLoadBalancerAttributesVersionEnum string

const (
    GetDescribeLoadBalancerAttributesVersionEnumTwoThousandAndTwelve0601 GetDescribeLoadBalancerAttributesVersionEnum = "2012-06-01"
)


type GetDescribeLoadBalancerAttributesQueryParams struct {
    Action GetDescribeLoadBalancerAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LoadBalancerName string `queryParam:"style=form,explode=true,name=LoadBalancerName"`
    Version GetDescribeLoadBalancerAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeLoadBalancerAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeLoadBalancerAttributesRequest struct {
    QueryParams GetDescribeLoadBalancerAttributesQueryParams 
    Headers GetDescribeLoadBalancerAttributesHeaders 
    
}

type GetDescribeLoadBalancerAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

