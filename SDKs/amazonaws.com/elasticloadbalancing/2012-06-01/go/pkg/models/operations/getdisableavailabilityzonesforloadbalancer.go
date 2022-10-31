package operations




type GetDisableAvailabilityZonesForLoadBalancerActionEnum string

const (
    GetDisableAvailabilityZonesForLoadBalancerActionEnumDisableAvailabilityZonesForLoadBalancer GetDisableAvailabilityZonesForLoadBalancerActionEnum = "DisableAvailabilityZonesForLoadBalancer"
)



type GetDisableAvailabilityZonesForLoadBalancerVersionEnum string

const (
    GetDisableAvailabilityZonesForLoadBalancerVersionEnumTwoThousandAndTwelve0601 GetDisableAvailabilityZonesForLoadBalancerVersionEnum = "2012-06-01"
)


type GetDisableAvailabilityZonesForLoadBalancerQueryParams struct {
    Action GetDisableAvailabilityZonesForLoadBalancerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AvailabilityZones []string `queryParam:"style=form,explode=true,name=AvailabilityZones"`
    LoadBalancerName string `queryParam:"style=form,explode=true,name=LoadBalancerName"`
    Version GetDisableAvailabilityZonesForLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisableAvailabilityZonesForLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisableAvailabilityZonesForLoadBalancerRequest struct {
    QueryParams GetDisableAvailabilityZonesForLoadBalancerQueryParams 
    Headers GetDisableAvailabilityZonesForLoadBalancerHeaders 
    
}

type GetDisableAvailabilityZonesForLoadBalancerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

