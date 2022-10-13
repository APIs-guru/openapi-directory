package operations

type GetDetachLoadBalancersActionEnum string

const (
	GetDetachLoadBalancersActionEnumDetachLoadBalancers GetDetachLoadBalancersActionEnum = "DetachLoadBalancers"
)

type GetDetachLoadBalancersVersionEnum string

const (
	GetDetachLoadBalancersVersionEnumTwoThousandAndEleven0101 GetDetachLoadBalancersVersionEnum = "2011-01-01"
)

type GetDetachLoadBalancersQueryParams struct {
	Action               GetDetachLoadBalancersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                            `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	LoadBalancerNames    []string                          `queryParam:"style=form,explode=true,name=LoadBalancerNames"`
	Version              GetDetachLoadBalancersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachLoadBalancersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachLoadBalancersRequest struct {
	QueryParams GetDetachLoadBalancersQueryParams
	Headers     GetDetachLoadBalancersHeaders
}

type GetDetachLoadBalancersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
