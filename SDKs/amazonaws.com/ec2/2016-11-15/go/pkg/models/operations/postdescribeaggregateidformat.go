package operations

type PostDescribeAggregateIDFormatActionEnum string

const (
	PostDescribeAggregateIDFormatActionEnumDescribeAggregateIDFormat PostDescribeAggregateIDFormatActionEnum = "DescribeAggregateIdFormat"
)

type PostDescribeAggregateIDFormatVersionEnum string

const (
	PostDescribeAggregateIDFormatVersionEnumTwoThousandAndSixteen1115 PostDescribeAggregateIDFormatVersionEnum = "2016-11-15"
)

type PostDescribeAggregateIDFormatQueryParams struct {
	Action  PostDescribeAggregateIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAggregateIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAggregateIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAggregateIDFormatRequest struct {
	QueryParams PostDescribeAggregateIDFormatQueryParams
	Headers     PostDescribeAggregateIDFormatHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAggregateIDFormatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
