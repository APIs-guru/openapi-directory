package operations

type PostDetachLoadBalancerFromSubnetsActionEnum string

const (
	PostDetachLoadBalancerFromSubnetsActionEnumDetachLoadBalancerFromSubnets PostDetachLoadBalancerFromSubnetsActionEnum = "DetachLoadBalancerFromSubnets"
)

type PostDetachLoadBalancerFromSubnetsVersionEnum string

const (
	PostDetachLoadBalancerFromSubnetsVersionEnumTwoThousandAndTwelve0601 PostDetachLoadBalancerFromSubnetsVersionEnum = "2012-06-01"
)

type PostDetachLoadBalancerFromSubnetsQueryParams struct {
	Action  PostDetachLoadBalancerFromSubnetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachLoadBalancerFromSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachLoadBalancerFromSubnetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachLoadBalancerFromSubnetsRequest struct {
	QueryParams PostDetachLoadBalancerFromSubnetsQueryParams
	Headers     PostDetachLoadBalancerFromSubnetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachLoadBalancerFromSubnetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
