package operations

type PostCreateLoadBalancerActionEnum string

const (
	PostCreateLoadBalancerActionEnumCreateLoadBalancer PostCreateLoadBalancerActionEnum = "CreateLoadBalancer"
)

type PostCreateLoadBalancerVersionEnum string

const (
	PostCreateLoadBalancerVersionEnumTwoThousandAndFifteen1201 PostCreateLoadBalancerVersionEnum = "2015-12-01"
)

type PostCreateLoadBalancerQueryParams struct {
	Action  PostCreateLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateLoadBalancerRequest struct {
	QueryParams PostCreateLoadBalancerQueryParams
	Headers     PostCreateLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
