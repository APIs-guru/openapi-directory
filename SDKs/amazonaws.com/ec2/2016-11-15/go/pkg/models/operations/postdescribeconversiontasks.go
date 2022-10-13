package operations

type PostDescribeConversionTasksActionEnum string

const (
	PostDescribeConversionTasksActionEnumDescribeConversionTasks PostDescribeConversionTasksActionEnum = "DescribeConversionTasks"
)

type PostDescribeConversionTasksVersionEnum string

const (
	PostDescribeConversionTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeConversionTasksVersionEnum = "2016-11-15"
)

type PostDescribeConversionTasksQueryParams struct {
	Action  PostDescribeConversionTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeConversionTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeConversionTasksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeConversionTasksRequest struct {
	QueryParams PostDescribeConversionTasksQueryParams
	Headers     PostDescribeConversionTasksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeConversionTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
