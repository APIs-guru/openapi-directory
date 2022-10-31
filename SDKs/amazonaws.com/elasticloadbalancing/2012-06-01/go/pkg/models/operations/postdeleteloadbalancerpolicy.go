package operations




type PostDeleteLoadBalancerPolicyActionEnum string

const (
    PostDeleteLoadBalancerPolicyActionEnumDeleteLoadBalancerPolicy PostDeleteLoadBalancerPolicyActionEnum = "DeleteLoadBalancerPolicy"
)



type PostDeleteLoadBalancerPolicyVersionEnum string

const (
    PostDeleteLoadBalancerPolicyVersionEnumTwoThousandAndTwelve0601 PostDeleteLoadBalancerPolicyVersionEnum = "2012-06-01"
)


type PostDeleteLoadBalancerPolicyQueryParams struct {
    Action PostDeleteLoadBalancerPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteLoadBalancerPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteLoadBalancerPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteLoadBalancerPolicyRequest struct {
    QueryParams PostDeleteLoadBalancerPolicyQueryParams 
    Headers PostDeleteLoadBalancerPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteLoadBalancerPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

