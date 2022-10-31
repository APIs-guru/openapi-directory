package operations

type GetDeleteLoadBalancerListenersActionEnum string

const (
	GetDeleteLoadBalancerListenersActionEnumDeleteLoadBalancerListeners GetDeleteLoadBalancerListenersActionEnum = "DeleteLoadBalancerListeners"
)

type GetDeleteLoadBalancerListenersVersionEnum string

const (
	GetDeleteLoadBalancerListenersVersionEnumTwoThousandAndTwelve0601 GetDeleteLoadBalancerListenersVersionEnum = "2012-06-01"
)

type GetDeleteLoadBalancerListenersQueryParams struct {
	Action            GetDeleteLoadBalancerListenersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerName  string                                    `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	LoadBalancerPorts []int64                                   `queryParam:"style=form,explode=true,name=LoadBalancerPorts"`
	Version           GetDeleteLoadBalancerListenersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLoadBalancerListenersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteLoadBalancerListenersRequest struct {
	QueryParams GetDeleteLoadBalancerListenersQueryParams
	Headers     GetDeleteLoadBalancerListenersHeaders
}

type GetDeleteLoadBalancerListenersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
