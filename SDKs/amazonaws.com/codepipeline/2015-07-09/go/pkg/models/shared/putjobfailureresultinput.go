package shared

type PutJobFailureResultInput struct {
	FailureDetails FailureDetails `json:"failureDetails"`
	JobID          string         `json:"jobId"`
}
