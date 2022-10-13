package operations

type PostDescribeSubnetsActionEnum string

const (
	PostDescribeSubnetsActionEnumDescribeSubnets PostDescribeSubnetsActionEnum = "DescribeSubnets"
)

type PostDescribeSubnetsVersionEnum string

const (
	PostDescribeSubnetsVersionEnumTwoThousandAndSixteen1115 PostDescribeSubnetsVersionEnum = "2016-11-15"
)

type PostDescribeSubnetsQueryParams struct {
	Action     PostDescribeSubnetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                        `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSubnetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSubnetsRequest struct {
	QueryParams PostDescribeSubnetsQueryParams
	Headers     PostDescribeSubnetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSubnetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
