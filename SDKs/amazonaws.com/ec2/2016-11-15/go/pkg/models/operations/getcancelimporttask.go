package operations

type GetCancelImportTaskActionEnum string

const (
	GetCancelImportTaskActionEnumCancelImportTask GetCancelImportTaskActionEnum = "CancelImportTask"
)

type GetCancelImportTaskVersionEnum string

const (
	GetCancelImportTaskVersionEnumTwoThousandAndSixteen1115 GetCancelImportTaskVersionEnum = "2016-11-15"
)

type GetCancelImportTaskQueryParams struct {
	Action       GetCancelImportTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CancelReason *string                        `queryParam:"style=form,explode=true,name=CancelReason"`
	DryRun       *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	ImportTaskID *string                        `queryParam:"style=form,explode=true,name=ImportTaskId"`
	Version      GetCancelImportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelImportTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelImportTaskRequest struct {
	QueryParams GetCancelImportTaskQueryParams
	Headers     GetCancelImportTaskHeaders
}

type GetCancelImportTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
