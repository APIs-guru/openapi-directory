package operations

type PostDescribeIpv6PoolsActionEnum string

const (
	PostDescribeIpv6PoolsActionEnumDescribeIpv6Pools PostDescribeIpv6PoolsActionEnum = "DescribeIpv6Pools"
)

type PostDescribeIpv6PoolsVersionEnum string

const (
	PostDescribeIpv6PoolsVersionEnumTwoThousandAndSixteen1115 PostDescribeIpv6PoolsVersionEnum = "2016-11-15"
)

type PostDescribeIpv6PoolsQueryParams struct {
	Action     PostDescribeIpv6PoolsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                          `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                          `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeIpv6PoolsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeIpv6PoolsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeIpv6PoolsRequest struct {
	QueryParams PostDescribeIpv6PoolsQueryParams
	Headers     PostDescribeIpv6PoolsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeIpv6PoolsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
