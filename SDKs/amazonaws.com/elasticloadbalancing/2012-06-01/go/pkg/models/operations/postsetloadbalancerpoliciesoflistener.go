package operations

type PostSetLoadBalancerPoliciesOfListenerActionEnum string

const (
	PostSetLoadBalancerPoliciesOfListenerActionEnumSetLoadBalancerPoliciesOfListener PostSetLoadBalancerPoliciesOfListenerActionEnum = "SetLoadBalancerPoliciesOfListener"
)

type PostSetLoadBalancerPoliciesOfListenerVersionEnum string

const (
	PostSetLoadBalancerPoliciesOfListenerVersionEnumTwoThousandAndTwelve0601 PostSetLoadBalancerPoliciesOfListenerVersionEnum = "2012-06-01"
)

type PostSetLoadBalancerPoliciesOfListenerQueryParams struct {
	Action  PostSetLoadBalancerPoliciesOfListenerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetLoadBalancerPoliciesOfListenerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetLoadBalancerPoliciesOfListenerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSetLoadBalancerPoliciesOfListenerRequest struct {
	QueryParams PostSetLoadBalancerPoliciesOfListenerQueryParams
	Headers     PostSetLoadBalancerPoliciesOfListenerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetLoadBalancerPoliciesOfListenerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
