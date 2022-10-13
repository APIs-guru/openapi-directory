package operations

type PostAttachLoadBalancersActionEnum string

const (
	PostAttachLoadBalancersActionEnumAttachLoadBalancers PostAttachLoadBalancersActionEnum = "AttachLoadBalancers"
)

type PostAttachLoadBalancersVersionEnum string

const (
	PostAttachLoadBalancersVersionEnumTwoThousandAndEleven0101 PostAttachLoadBalancersVersionEnum = "2011-01-01"
)

type PostAttachLoadBalancersQueryParams struct {
	Action  PostAttachLoadBalancersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachLoadBalancersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachLoadBalancersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAttachLoadBalancersRequest struct {
	QueryParams PostAttachLoadBalancersQueryParams
	Headers     PostAttachLoadBalancersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachLoadBalancersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
