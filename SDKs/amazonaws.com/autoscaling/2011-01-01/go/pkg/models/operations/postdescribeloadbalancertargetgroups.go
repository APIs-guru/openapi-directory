package operations

type PostDescribeLoadBalancerTargetGroupsActionEnum string

const (
	PostDescribeLoadBalancerTargetGroupsActionEnumDescribeLoadBalancerTargetGroups PostDescribeLoadBalancerTargetGroupsActionEnum = "DescribeLoadBalancerTargetGroups"
)

type PostDescribeLoadBalancerTargetGroupsVersionEnum string

const (
	PostDescribeLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 PostDescribeLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

type PostDescribeLoadBalancerTargetGroupsQueryParams struct {
	Action  PostDescribeLoadBalancerTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLoadBalancerTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLoadBalancerTargetGroupsRequest struct {
	QueryParams PostDescribeLoadBalancerTargetGroupsQueryParams
	Headers     PostDescribeLoadBalancerTargetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
