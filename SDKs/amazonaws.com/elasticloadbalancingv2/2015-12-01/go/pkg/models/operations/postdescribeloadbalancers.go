package operations

type PostDescribeLoadBalancersActionEnum string

const (
	PostDescribeLoadBalancersActionEnumDescribeLoadBalancers PostDescribeLoadBalancersActionEnum = "DescribeLoadBalancers"
)

type PostDescribeLoadBalancersVersionEnum string

const (
	PostDescribeLoadBalancersVersionEnumTwoThousandAndFifteen1201 PostDescribeLoadBalancersVersionEnum = "2015-12-01"
)

type PostDescribeLoadBalancersQueryParams struct {
	Action  PostDescribeLoadBalancersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker  *string                              `queryParam:"style=form,explode=true,name=Marker"`
	Version PostDescribeLoadBalancersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLoadBalancersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeLoadBalancersRequest struct {
	QueryParams PostDescribeLoadBalancersQueryParams
	Headers     PostDescribeLoadBalancersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLoadBalancersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
