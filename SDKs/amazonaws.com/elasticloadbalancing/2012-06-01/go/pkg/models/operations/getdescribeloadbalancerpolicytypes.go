package operations




type GetDescribeLoadBalancerPolicyTypesActionEnum string

const (
    GetDescribeLoadBalancerPolicyTypesActionEnumDescribeLoadBalancerPolicyTypes GetDescribeLoadBalancerPolicyTypesActionEnum = "DescribeLoadBalancerPolicyTypes"
)



type GetDescribeLoadBalancerPolicyTypesVersionEnum string

const (
    GetDescribeLoadBalancerPolicyTypesVersionEnumTwoThousandAndTwelve0601 GetDescribeLoadBalancerPolicyTypesVersionEnum = "2012-06-01"
)


type GetDescribeLoadBalancerPolicyTypesQueryParams struct {
    Action GetDescribeLoadBalancerPolicyTypesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyTypeNames []string `queryParam:"style=form,explode=true,name=PolicyTypeNames"`
    Version GetDescribeLoadBalancerPolicyTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeLoadBalancerPolicyTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeLoadBalancerPolicyTypesRequest struct {
    QueryParams GetDescribeLoadBalancerPolicyTypesQueryParams 
    Headers GetDescribeLoadBalancerPolicyTypesHeaders 
    
}

type GetDescribeLoadBalancerPolicyTypesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

