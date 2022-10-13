package operations

type GetDeleteLoadBalancerPolicyActionEnum string

const (
	GetDeleteLoadBalancerPolicyActionEnumDeleteLoadBalancerPolicy GetDeleteLoadBalancerPolicyActionEnum = "DeleteLoadBalancerPolicy"
)

type GetDeleteLoadBalancerPolicyVersionEnum string

const (
	GetDeleteLoadBalancerPolicyVersionEnumTwoThousandAndTwelve0601 GetDeleteLoadBalancerPolicyVersionEnum = "2012-06-01"
)

type GetDeleteLoadBalancerPolicyQueryParams struct {
	Action           GetDeleteLoadBalancerPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerName string                                 `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	PolicyName       string                                 `queryParam:"style=form,explode=true,name=PolicyName"`
	Version          GetDeleteLoadBalancerPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLoadBalancerPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteLoadBalancerPolicyRequest struct {
	QueryParams GetDeleteLoadBalancerPolicyQueryParams
	Headers     GetDeleteLoadBalancerPolicyHeaders
}

type GetDeleteLoadBalancerPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
