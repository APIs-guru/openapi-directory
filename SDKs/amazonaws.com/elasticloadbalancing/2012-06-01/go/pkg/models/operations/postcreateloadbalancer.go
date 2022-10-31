package operations




type PostCreateLoadBalancerActionEnum string

const (
    PostCreateLoadBalancerActionEnumCreateLoadBalancer PostCreateLoadBalancerActionEnum = "CreateLoadBalancer"
)



type PostCreateLoadBalancerVersionEnum string

const (
    PostCreateLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostCreateLoadBalancerVersionEnum = "2012-06-01"
)


type PostCreateLoadBalancerQueryParams struct {
    Action PostCreateLoadBalancerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateLoadBalancerRequest struct {
    QueryParams PostCreateLoadBalancerQueryParams 
    Headers PostCreateLoadBalancerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateLoadBalancerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

