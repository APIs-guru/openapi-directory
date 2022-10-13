package operations

type PostCreateLoadBalancerPolicyActionEnum string

const (
	PostCreateLoadBalancerPolicyActionEnumCreateLoadBalancerPolicy PostCreateLoadBalancerPolicyActionEnum = "CreateLoadBalancerPolicy"
)

type PostCreateLoadBalancerPolicyVersionEnum string

const (
	PostCreateLoadBalancerPolicyVersionEnumTwoThousandAndTwelve0601 PostCreateLoadBalancerPolicyVersionEnum = "2012-06-01"
)

type PostCreateLoadBalancerPolicyQueryParams struct {
	Action  PostCreateLoadBalancerPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLoadBalancerPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLoadBalancerPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateLoadBalancerPolicyRequest struct {
	QueryParams PostCreateLoadBalancerPolicyQueryParams
	Headers     PostCreateLoadBalancerPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLoadBalancerPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
