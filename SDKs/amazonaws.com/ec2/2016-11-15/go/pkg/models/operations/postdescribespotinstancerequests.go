package operations

type PostDescribeSpotInstanceRequestsActionEnum string

const (
	PostDescribeSpotInstanceRequestsActionEnumDescribeSpotInstanceRequests PostDescribeSpotInstanceRequestsActionEnum = "DescribeSpotInstanceRequests"
)

type PostDescribeSpotInstanceRequestsVersionEnum string

const (
	PostDescribeSpotInstanceRequestsVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotInstanceRequestsVersionEnum = "2016-11-15"
)

type PostDescribeSpotInstanceRequestsQueryParams struct {
	Action     PostDescribeSpotInstanceRequestsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeSpotInstanceRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSpotInstanceRequestsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSpotInstanceRequestsRequest struct {
	QueryParams PostDescribeSpotInstanceRequestsQueryParams
	Headers     PostDescribeSpotInstanceRequestsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSpotInstanceRequestsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
