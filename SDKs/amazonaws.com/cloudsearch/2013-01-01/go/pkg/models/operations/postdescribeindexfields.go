package operations

type PostDescribeIndexFieldsActionEnum string

const (
	PostDescribeIndexFieldsActionEnumDescribeIndexFields PostDescribeIndexFieldsActionEnum = "DescribeIndexFields"
)

type PostDescribeIndexFieldsVersionEnum string

const (
	PostDescribeIndexFieldsVersionEnumTwoThousandAndThirteen0101 PostDescribeIndexFieldsVersionEnum = "2013-01-01"
)

type PostDescribeIndexFieldsQueryParams struct {
	Action  PostDescribeIndexFieldsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeIndexFieldsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeIndexFieldsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeIndexFieldsRequest struct {
	QueryParams PostDescribeIndexFieldsQueryParams
	Headers     PostDescribeIndexFieldsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeIndexFieldsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
