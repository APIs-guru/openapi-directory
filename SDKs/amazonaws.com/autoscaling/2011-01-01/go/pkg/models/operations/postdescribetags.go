package operations

type PostDescribeTagsActionEnum string

const (
	PostDescribeTagsActionEnumDescribeTags PostDescribeTagsActionEnum = "DescribeTags"
)

type PostDescribeTagsVersionEnum string

const (
	PostDescribeTagsVersionEnumTwoThousandAndEleven0101 PostDescribeTagsVersionEnum = "2011-01-01"
)

type PostDescribeTagsQueryParams struct {
	Action     PostDescribeTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                     `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
