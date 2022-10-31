package operations

type PostDescribePublicIpv4PoolsActionEnum string

const (
	PostDescribePublicIpv4PoolsActionEnumDescribePublicIpv4Pools PostDescribePublicIpv4PoolsActionEnum = "DescribePublicIpv4Pools"
)

type PostDescribePublicIpv4PoolsVersionEnum string

const (
	PostDescribePublicIpv4PoolsVersionEnumTwoThousandAndSixteen1115 PostDescribePublicIpv4PoolsVersionEnum = "2016-11-15"
)

type PostDescribePublicIpv4PoolsQueryParams struct {
	Action     PostDescribePublicIpv4PoolsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribePublicIpv4PoolsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePublicIpv4PoolsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribePublicIpv4PoolsRequest struct {
	QueryParams PostDescribePublicIpv4PoolsQueryParams
	Headers     PostDescribePublicIpv4PoolsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePublicIpv4PoolsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
