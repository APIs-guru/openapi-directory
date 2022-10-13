package operations

type JobsDeleteJobPathParams struct {
	JobID int32 `pathParam:"style=simple,explode=false,name=jobID"`
}

type JobsDeleteJobRequest struct {
	PathParams JobsDeleteJobPathParams
}

type JobsDeleteJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
