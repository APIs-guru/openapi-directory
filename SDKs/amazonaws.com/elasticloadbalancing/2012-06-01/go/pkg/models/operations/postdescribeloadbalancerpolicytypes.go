package operations

type PostDescribeLoadBalancerPolicyTypesActionEnum string

const (
	PostDescribeLoadBalancerPolicyTypesActionEnumDescribeLoadBalancerPolicyTypes PostDescribeLoadBalancerPolicyTypesActionEnum = "DescribeLoadBalancerPolicyTypes"
)

type PostDescribeLoadBalancerPolicyTypesVersionEnum string

const (
	PostDescribeLoadBalancerPolicyTypesVersionEnumTwoThousandAndTwelve0601 PostDescribeLoadBalancerPolicyTypesVersionEnum = "2012-06-01"
)

type PostDescribeLoadBalancerPolicyTypesQueryParams struct {
	Action  PostDescribeLoadBalancerPolicyTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLoadBalancerPolicyTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLoadBalancerPolicyTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLoadBalancerPolicyTypesRequest struct {
	QueryParams PostDescribeLoadBalancerPolicyTypesQueryParams
	Headers     PostDescribeLoadBalancerPolicyTypesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLoadBalancerPolicyTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
