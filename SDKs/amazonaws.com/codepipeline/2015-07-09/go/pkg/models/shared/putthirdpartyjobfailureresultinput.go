package shared

type PutThirdPartyJobFailureResultInput struct {
	ClientToken    string         `json:"clientToken"`
	FailureDetails FailureDetails `json:"failureDetails"`
	JobID          string         `json:"jobId"`
}
