package operations

type PostDescribeLoadBalancerAttributesActionEnum string

const (
	PostDescribeLoadBalancerAttributesActionEnumDescribeLoadBalancerAttributes PostDescribeLoadBalancerAttributesActionEnum = "DescribeLoadBalancerAttributes"
)

type PostDescribeLoadBalancerAttributesVersionEnum string

const (
	PostDescribeLoadBalancerAttributesVersionEnumTwoThousandAndFifteen1201 PostDescribeLoadBalancerAttributesVersionEnum = "2015-12-01"
)

type PostDescribeLoadBalancerAttributesQueryParams struct {
	Action  PostDescribeLoadBalancerAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLoadBalancerAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLoadBalancerAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLoadBalancerAttributesRequest struct {
	QueryParams PostDescribeLoadBalancerAttributesQueryParams
	Headers     PostDescribeLoadBalancerAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLoadBalancerAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
