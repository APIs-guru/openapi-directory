package operations

type ContentSubmissionTypesDeleteContentSubmissionTypePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type ContentSubmissionTypesDeleteContentSubmissionTypeRequest struct {
	PathParams ContentSubmissionTypesDeleteContentSubmissionTypePathParams
}

type ContentSubmissionTypesDeleteContentSubmissionTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
