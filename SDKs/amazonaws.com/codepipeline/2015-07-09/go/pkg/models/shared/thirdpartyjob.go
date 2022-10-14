package shared

type ThirdPartyJob struct {
	ClientID *string `json:"clientId,omitempty"`
	JobID    *string `json:"jobId,omitempty"`
}
