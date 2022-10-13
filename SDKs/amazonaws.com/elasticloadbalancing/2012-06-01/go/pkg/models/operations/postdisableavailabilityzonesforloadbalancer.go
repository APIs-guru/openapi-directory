package operations

type PostDisableAvailabilityZonesForLoadBalancerActionEnum string

const (
	PostDisableAvailabilityZonesForLoadBalancerActionEnumDisableAvailabilityZonesForLoadBalancer PostDisableAvailabilityZonesForLoadBalancerActionEnum = "DisableAvailabilityZonesForLoadBalancer"
)

type PostDisableAvailabilityZonesForLoadBalancerVersionEnum string

const (
	PostDisableAvailabilityZonesForLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostDisableAvailabilityZonesForLoadBalancerVersionEnum = "2012-06-01"
)

type PostDisableAvailabilityZonesForLoadBalancerQueryParams struct {
	Action  PostDisableAvailabilityZonesForLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableAvailabilityZonesForLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableAvailabilityZonesForLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableAvailabilityZonesForLoadBalancerRequest struct {
	QueryParams PostDisableAvailabilityZonesForLoadBalancerQueryParams
	Headers     PostDisableAvailabilityZonesForLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableAvailabilityZonesForLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
