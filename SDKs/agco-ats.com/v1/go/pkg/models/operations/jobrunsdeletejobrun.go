package operations

type JobRunsDeleteJobRunPathParams struct {
	JobRunID int32 `pathParam:"style=simple,explode=false,name=jobRunID"`
}

type JobRunsDeleteJobRunRequest struct {
	PathParams JobRunsDeleteJobRunPathParams
}

type JobRunsDeleteJobRunResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
