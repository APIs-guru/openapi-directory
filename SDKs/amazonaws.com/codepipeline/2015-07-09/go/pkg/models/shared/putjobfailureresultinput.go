package shared

// PutJobFailureResultInput
// Represents the input of a <code>PutJobFailureResult</code> action.
type PutJobFailureResultInput struct {
	FailureDetails FailureDetails `json:"failureDetails"`
	JobID          string         `json:"jobId"`
}
