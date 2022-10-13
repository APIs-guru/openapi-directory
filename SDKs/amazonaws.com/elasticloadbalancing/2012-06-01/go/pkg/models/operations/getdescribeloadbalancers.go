package operations

type GetDescribeLoadBalancersActionEnum string

const (
	GetDescribeLoadBalancersActionEnumDescribeLoadBalancers GetDescribeLoadBalancersActionEnum = "DescribeLoadBalancers"
)

type GetDescribeLoadBalancersVersionEnum string

const (
	GetDescribeLoadBalancersVersionEnumTwoThousandAndTwelve0601 GetDescribeLoadBalancersVersionEnum = "2012-06-01"
)

type GetDescribeLoadBalancersQueryParams struct {
	Action            GetDescribeLoadBalancersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerNames []string                            `queryParam:"style=form,explode=true,name=LoadBalancerNames"`
	Marker            *string                             `queryParam:"style=form,explode=true,name=Marker"`
	PageSize          *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	Version           GetDescribeLoadBalancersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeLoadBalancersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeLoadBalancersRequest struct {
	QueryParams GetDescribeLoadBalancersQueryParams
	Headers     GetDescribeLoadBalancersHeaders
}

type GetDescribeLoadBalancersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
