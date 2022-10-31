package operations

type PostCreateLoadBalancerListenersActionEnum string

const (
	PostCreateLoadBalancerListenersActionEnumCreateLoadBalancerListeners PostCreateLoadBalancerListenersActionEnum = "CreateLoadBalancerListeners"
)

type PostCreateLoadBalancerListenersVersionEnum string

const (
	PostCreateLoadBalancerListenersVersionEnumTwoThousandAndTwelve0601 PostCreateLoadBalancerListenersVersionEnum = "2012-06-01"
)

type PostCreateLoadBalancerListenersQueryParams struct {
	Action  PostCreateLoadBalancerListenersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLoadBalancerListenersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLoadBalancerListenersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateLoadBalancerListenersRequest struct {
	QueryParams PostCreateLoadBalancerListenersQueryParams
	Headers     PostCreateLoadBalancerListenersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLoadBalancerListenersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
