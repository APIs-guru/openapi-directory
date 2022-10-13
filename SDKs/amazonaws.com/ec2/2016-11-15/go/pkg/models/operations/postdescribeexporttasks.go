package operations

type PostDescribeExportTasksActionEnum string

const (
	PostDescribeExportTasksActionEnumDescribeExportTasks PostDescribeExportTasksActionEnum = "DescribeExportTasks"
)

type PostDescribeExportTasksVersionEnum string

const (
	PostDescribeExportTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeExportTasksVersionEnum = "2016-11-15"
)

type PostDescribeExportTasksQueryParams struct {
	Action  PostDescribeExportTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeExportTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeExportTasksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeExportTasksRequest struct {
	QueryParams PostDescribeExportTasksQueryParams
	Headers     PostDescribeExportTasksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeExportTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
