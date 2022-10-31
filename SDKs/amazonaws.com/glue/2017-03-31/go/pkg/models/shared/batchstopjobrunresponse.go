package shared

type BatchStopJobRunResponse struct {
	Errors                []BatchStopJobRunError                `json:"Errors,omitempty"`
	SuccessfulSubmissions []BatchStopJobRunSuccessfulSubmission `json:"SuccessfulSubmissions,omitempty"`
}
