package operations

type PostDescribeTagsActionEnum string

const (
	PostDescribeTagsActionEnumDescribeTags PostDescribeTagsActionEnum = "DescribeTags"
)

type PostDescribeTagsVersionEnum string

const (
	PostDescribeTagsVersionEnumTwoThousandAndSixteen1115 PostDescribeTagsVersionEnum = "2016-11-15"
)

type PostDescribeTagsQueryParams struct {
	Action     PostDescribeTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTagsRequest struct {
	QueryParams PostDescribeTagsQueryParams
	Headers     PostDescribeTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
