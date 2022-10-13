package operations

type PostDescribeEventsActionEnum string

const (
	PostDescribeEventsActionEnumDescribeEvents PostDescribeEventsActionEnum = "DescribeEvents"
)

type PostDescribeEventsVersionEnum string

const (
	PostDescribeEventsVersionEnumTwoThousandAndTen1201 PostDescribeEventsVersionEnum = "2010-12-01"
)

type PostDescribeEventsQueryParams struct {
	Action     PostDescribeEventsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                       `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeEventsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeEventsRequest struct {
	QueryParams PostDescribeEventsQueryParams
	Headers     PostDescribeEventsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEventsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
