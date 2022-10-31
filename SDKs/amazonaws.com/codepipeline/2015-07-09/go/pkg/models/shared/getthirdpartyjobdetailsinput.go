package shared

type GetThirdPartyJobDetailsInput struct {
	ClientToken string `json:"clientToken"`
	JobID       string `json:"jobId"`
}
