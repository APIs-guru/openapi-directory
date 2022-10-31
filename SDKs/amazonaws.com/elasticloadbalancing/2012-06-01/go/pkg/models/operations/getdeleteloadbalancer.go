package operations




type GetDeleteLoadBalancerActionEnum string

const (
    GetDeleteLoadBalancerActionEnumDeleteLoadBalancer GetDeleteLoadBalancerActionEnum = "DeleteLoadBalancer"
)



type GetDeleteLoadBalancerVersionEnum string

const (
    GetDeleteLoadBalancerVersionEnumTwoThousandAndTwelve0601 GetDeleteLoadBalancerVersionEnum = "2012-06-01"
)


type GetDeleteLoadBalancerQueryParams struct {
    Action GetDeleteLoadBalancerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LoadBalancerName string `queryParam:"style=form,explode=true,name=LoadBalancerName"`
    Version GetDeleteLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteLoadBalancerRequest struct {
    QueryParams GetDeleteLoadBalancerQueryParams 
    Headers GetDeleteLoadBalancerHeaders 
    
}

type GetDeleteLoadBalancerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

