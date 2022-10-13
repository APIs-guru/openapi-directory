package operations

type GetSetLoadBalancerPoliciesOfListenerActionEnum string

const (
	GetSetLoadBalancerPoliciesOfListenerActionEnumSetLoadBalancerPoliciesOfListener GetSetLoadBalancerPoliciesOfListenerActionEnum = "SetLoadBalancerPoliciesOfListener"
)

type GetSetLoadBalancerPoliciesOfListenerVersionEnum string

const (
	GetSetLoadBalancerPoliciesOfListenerVersionEnumTwoThousandAndTwelve0601 GetSetLoadBalancerPoliciesOfListenerVersionEnum = "2012-06-01"
)

type GetSetLoadBalancerPoliciesOfListenerQueryParams struct {
	Action           GetSetLoadBalancerPoliciesOfListenerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerName string                                          `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	LoadBalancerPort int64                                           `queryParam:"style=form,explode=true,name=LoadBalancerPort"`
	PolicyNames      []string                                        `queryParam:"style=form,explode=true,name=PolicyNames"`
	Version          GetSetLoadBalancerPoliciesOfListenerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetLoadBalancerPoliciesOfListenerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetLoadBalancerPoliciesOfListenerRequest struct {
	QueryParams GetSetLoadBalancerPoliciesOfListenerQueryParams
	Headers     GetSetLoadBalancerPoliciesOfListenerHeaders
}

type GetSetLoadBalancerPoliciesOfListenerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
