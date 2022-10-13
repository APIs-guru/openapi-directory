package operations

type PostCreateInstanceExportTaskActionEnum string

const (
	PostCreateInstanceExportTaskActionEnumCreateInstanceExportTask PostCreateInstanceExportTaskActionEnum = "CreateInstanceExportTask"
)

type PostCreateInstanceExportTaskVersionEnum string

const (
	PostCreateInstanceExportTaskVersionEnumTwoThousandAndSixteen1115 PostCreateInstanceExportTaskVersionEnum = "2016-11-15"
)

type PostCreateInstanceExportTaskQueryParams struct {
	Action  PostCreateInstanceExportTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateInstanceExportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateInstanceExportTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateInstanceExportTaskRequest struct {
	QueryParams PostCreateInstanceExportTaskQueryParams
	Headers     PostCreateInstanceExportTaskHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateInstanceExportTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
