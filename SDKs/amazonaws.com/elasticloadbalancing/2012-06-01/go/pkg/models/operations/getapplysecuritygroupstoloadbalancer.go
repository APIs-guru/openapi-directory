package operations




type GetApplySecurityGroupsToLoadBalancerActionEnum string

const (
    GetApplySecurityGroupsToLoadBalancerActionEnumApplySecurityGroupsToLoadBalancer GetApplySecurityGroupsToLoadBalancerActionEnum = "ApplySecurityGroupsToLoadBalancer"
)



type GetApplySecurityGroupsToLoadBalancerVersionEnum string

const (
    GetApplySecurityGroupsToLoadBalancerVersionEnumTwoThousandAndTwelve0601 GetApplySecurityGroupsToLoadBalancerVersionEnum = "2012-06-01"
)


type GetApplySecurityGroupsToLoadBalancerQueryParams struct {
    Action GetApplySecurityGroupsToLoadBalancerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LoadBalancerName string `queryParam:"style=form,explode=true,name=LoadBalancerName"`
    SecurityGroups []string `queryParam:"style=form,explode=true,name=SecurityGroups"`
    Version GetApplySecurityGroupsToLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetApplySecurityGroupsToLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetApplySecurityGroupsToLoadBalancerRequest struct {
    QueryParams GetApplySecurityGroupsToLoadBalancerQueryParams 
    Headers GetApplySecurityGroupsToLoadBalancerHeaders 
    
}

type GetApplySecurityGroupsToLoadBalancerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

