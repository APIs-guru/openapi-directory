package shared

type BatchStopJobRunResponse struct {
	Errors                []BatchStopJobRunError                `json:"Errors"`
	SuccessfulSubmissions []BatchStopJobRunSuccessfulSubmission `json:"SuccessfulSubmissions"`
}
