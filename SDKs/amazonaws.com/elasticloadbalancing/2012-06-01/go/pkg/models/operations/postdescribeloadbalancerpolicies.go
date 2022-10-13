package operations

type PostDescribeLoadBalancerPoliciesActionEnum string

const (
	PostDescribeLoadBalancerPoliciesActionEnumDescribeLoadBalancerPolicies PostDescribeLoadBalancerPoliciesActionEnum = "DescribeLoadBalancerPolicies"
)

type PostDescribeLoadBalancerPoliciesVersionEnum string

const (
	PostDescribeLoadBalancerPoliciesVersionEnumTwoThousandAndTwelve0601 PostDescribeLoadBalancerPoliciesVersionEnum = "2012-06-01"
)

type PostDescribeLoadBalancerPoliciesQueryParams struct {
	Action  PostDescribeLoadBalancerPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLoadBalancerPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLoadBalancerPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLoadBalancerPoliciesRequest struct {
	QueryParams PostDescribeLoadBalancerPoliciesQueryParams
	Headers     PostDescribeLoadBalancerPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLoadBalancerPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
