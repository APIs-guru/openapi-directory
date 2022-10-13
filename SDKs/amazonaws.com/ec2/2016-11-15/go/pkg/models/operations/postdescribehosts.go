package operations

type PostDescribeHostsActionEnum string

const (
	PostDescribeHostsActionEnumDescribeHosts PostDescribeHostsActionEnum = "DescribeHosts"
)

type PostDescribeHostsVersionEnum string

const (
	PostDescribeHostsVersionEnumTwoThousandAndSixteen1115 PostDescribeHostsVersionEnum = "2016-11-15"
)

type PostDescribeHostsQueryParams struct {
	Action     PostDescribeHostsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                      `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                      `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeHostsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeHostsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeHostsRequest struct {
	QueryParams PostDescribeHostsQueryParams
	Headers     PostDescribeHostsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeHostsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
