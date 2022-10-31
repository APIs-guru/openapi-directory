package operations




type PostEnableAvailabilityZonesForLoadBalancerActionEnum string

const (
    PostEnableAvailabilityZonesForLoadBalancerActionEnumEnableAvailabilityZonesForLoadBalancer PostEnableAvailabilityZonesForLoadBalancerActionEnum = "EnableAvailabilityZonesForLoadBalancer"
)



type PostEnableAvailabilityZonesForLoadBalancerVersionEnum string

const (
    PostEnableAvailabilityZonesForLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostEnableAvailabilityZonesForLoadBalancerVersionEnum = "2012-06-01"
)


type PostEnableAvailabilityZonesForLoadBalancerQueryParams struct {
    Action PostEnableAvailabilityZonesForLoadBalancerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostEnableAvailabilityZonesForLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostEnableAvailabilityZonesForLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostEnableAvailabilityZonesForLoadBalancerRequest struct {
    QueryParams PostEnableAvailabilityZonesForLoadBalancerQueryParams 
    Headers PostEnableAvailabilityZonesForLoadBalancerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostEnableAvailabilityZonesForLoadBalancerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

