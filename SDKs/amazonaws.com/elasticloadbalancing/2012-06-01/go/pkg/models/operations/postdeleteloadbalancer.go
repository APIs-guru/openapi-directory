package operations

type PostDeleteLoadBalancerActionEnum string

const (
	PostDeleteLoadBalancerActionEnumDeleteLoadBalancer PostDeleteLoadBalancerActionEnum = "DeleteLoadBalancer"
)

type PostDeleteLoadBalancerVersionEnum string

const (
	PostDeleteLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostDeleteLoadBalancerVersionEnum = "2012-06-01"
)

type PostDeleteLoadBalancerQueryParams struct {
	Action  PostDeleteLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteLoadBalancerRequest struct {
	QueryParams PostDeleteLoadBalancerQueryParams
	Headers     PostDeleteLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
