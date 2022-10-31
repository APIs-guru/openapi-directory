package operations

type GetAttachLoadBalancerToSubnetsActionEnum string

const (
	GetAttachLoadBalancerToSubnetsActionEnumAttachLoadBalancerToSubnets GetAttachLoadBalancerToSubnetsActionEnum = "AttachLoadBalancerToSubnets"
)

type GetAttachLoadBalancerToSubnetsVersionEnum string

const (
	GetAttachLoadBalancerToSubnetsVersionEnumTwoThousandAndTwelve0601 GetAttachLoadBalancerToSubnetsVersionEnum = "2012-06-01"
)

type GetAttachLoadBalancerToSubnetsQueryParams struct {
	Action           GetAttachLoadBalancerToSubnetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerName string                                    `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	Subnets          []string                                  `queryParam:"style=form,explode=true,name=Subnets"`
	Version          GetAttachLoadBalancerToSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAttachLoadBalancerToSubnetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAttachLoadBalancerToSubnetsRequest struct {
	QueryParams GetAttachLoadBalancerToSubnetsQueryParams
	Headers     GetAttachLoadBalancerToSubnetsHeaders
}

type GetAttachLoadBalancerToSubnetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
