package operations

type GetEnableAvailabilityZonesForLoadBalancerActionEnum string

const (
	GetEnableAvailabilityZonesForLoadBalancerActionEnumEnableAvailabilityZonesForLoadBalancer GetEnableAvailabilityZonesForLoadBalancerActionEnum = "EnableAvailabilityZonesForLoadBalancer"
)

type GetEnableAvailabilityZonesForLoadBalancerVersionEnum string

const (
	GetEnableAvailabilityZonesForLoadBalancerVersionEnumTwoThousandAndTwelve0601 GetEnableAvailabilityZonesForLoadBalancerVersionEnum = "2012-06-01"
)

type GetEnableAvailabilityZonesForLoadBalancerQueryParams struct {
	Action            GetEnableAvailabilityZonesForLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AvailabilityZones []string                                             `queryParam:"style=form,explode=true,name=AvailabilityZones"`
	LoadBalancerName  string                                               `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	Version           GetEnableAvailabilityZonesForLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableAvailabilityZonesForLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableAvailabilityZonesForLoadBalancerRequest struct {
	QueryParams GetEnableAvailabilityZonesForLoadBalancerQueryParams
	Headers     GetEnableAvailabilityZonesForLoadBalancerHeaders
}

type GetEnableAvailabilityZonesForLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
