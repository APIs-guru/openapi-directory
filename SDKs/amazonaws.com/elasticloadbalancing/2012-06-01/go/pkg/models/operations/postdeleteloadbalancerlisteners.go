package operations

type PostDeleteLoadBalancerListenersActionEnum string

const (
	PostDeleteLoadBalancerListenersActionEnumDeleteLoadBalancerListeners PostDeleteLoadBalancerListenersActionEnum = "DeleteLoadBalancerListeners"
)

type PostDeleteLoadBalancerListenersVersionEnum string

const (
	PostDeleteLoadBalancerListenersVersionEnumTwoThousandAndTwelve0601 PostDeleteLoadBalancerListenersVersionEnum = "2012-06-01"
)

type PostDeleteLoadBalancerListenersQueryParams struct {
	Action  PostDeleteLoadBalancerListenersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLoadBalancerListenersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLoadBalancerListenersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteLoadBalancerListenersRequest struct {
	QueryParams PostDeleteLoadBalancerListenersQueryParams
	Headers     PostDeleteLoadBalancerListenersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLoadBalancerListenersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
