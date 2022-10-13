package operations

type GetDetachLoadBalancerFromSubnetsActionEnum string

const (
	GetDetachLoadBalancerFromSubnetsActionEnumDetachLoadBalancerFromSubnets GetDetachLoadBalancerFromSubnetsActionEnum = "DetachLoadBalancerFromSubnets"
)

type GetDetachLoadBalancerFromSubnetsVersionEnum string

const (
	GetDetachLoadBalancerFromSubnetsVersionEnumTwoThousandAndTwelve0601 GetDetachLoadBalancerFromSubnetsVersionEnum = "2012-06-01"
)

type GetDetachLoadBalancerFromSubnetsQueryParams struct {
	Action           GetDetachLoadBalancerFromSubnetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerName string                                      `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	Subnets          []string                                    `queryParam:"style=form,explode=true,name=Subnets"`
	Version          GetDetachLoadBalancerFromSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachLoadBalancerFromSubnetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachLoadBalancerFromSubnetsRequest struct {
	QueryParams GetDetachLoadBalancerFromSubnetsQueryParams
	Headers     GetDetachLoadBalancerFromSubnetsHeaders
}

type GetDetachLoadBalancerFromSubnetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
