package operations

type PostAttachLoadBalancerToSubnetsActionEnum string

const (
	PostAttachLoadBalancerToSubnetsActionEnumAttachLoadBalancerToSubnets PostAttachLoadBalancerToSubnetsActionEnum = "AttachLoadBalancerToSubnets"
)

type PostAttachLoadBalancerToSubnetsVersionEnum string

const (
	PostAttachLoadBalancerToSubnetsVersionEnumTwoThousandAndTwelve0601 PostAttachLoadBalancerToSubnetsVersionEnum = "2012-06-01"
)

type PostAttachLoadBalancerToSubnetsQueryParams struct {
	Action  PostAttachLoadBalancerToSubnetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachLoadBalancerToSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachLoadBalancerToSubnetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAttachLoadBalancerToSubnetsRequest struct {
	QueryParams PostAttachLoadBalancerToSubnetsQueryParams
	Headers     PostAttachLoadBalancerToSubnetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachLoadBalancerToSubnetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
