package operations

type GetDescribeLoadBalancerPoliciesActionEnum string

const (
	GetDescribeLoadBalancerPoliciesActionEnumDescribeLoadBalancerPolicies GetDescribeLoadBalancerPoliciesActionEnum = "DescribeLoadBalancerPolicies"
)

type GetDescribeLoadBalancerPoliciesVersionEnum string

const (
	GetDescribeLoadBalancerPoliciesVersionEnumTwoThousandAndTwelve0601 GetDescribeLoadBalancerPoliciesVersionEnum = "2012-06-01"
)

type GetDescribeLoadBalancerPoliciesQueryParams struct {
	Action           GetDescribeLoadBalancerPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerName *string                                    `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	PolicyNames      []string                                   `queryParam:"style=form,explode=true,name=PolicyNames"`
	Version          GetDescribeLoadBalancerPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeLoadBalancerPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeLoadBalancerPoliciesRequest struct {
	QueryParams GetDescribeLoadBalancerPoliciesQueryParams
	Headers     GetDescribeLoadBalancerPoliciesHeaders
}

type GetDescribeLoadBalancerPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
