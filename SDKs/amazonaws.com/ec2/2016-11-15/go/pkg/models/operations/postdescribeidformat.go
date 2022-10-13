package operations

type PostDescribeIDFormatActionEnum string

const (
	PostDescribeIDFormatActionEnumDescribeIDFormat PostDescribeIDFormatActionEnum = "DescribeIdFormat"
)

type PostDescribeIDFormatVersionEnum string

const (
	PostDescribeIDFormatVersionEnumTwoThousandAndSixteen1115 PostDescribeIDFormatVersionEnum = "2016-11-15"
)

type PostDescribeIDFormatQueryParams struct {
	Action  PostDescribeIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeIDFormatRequest struct {
	QueryParams PostDescribeIDFormatQueryParams
	Headers     PostDescribeIDFormatHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeIDFormatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
