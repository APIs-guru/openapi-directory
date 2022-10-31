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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
