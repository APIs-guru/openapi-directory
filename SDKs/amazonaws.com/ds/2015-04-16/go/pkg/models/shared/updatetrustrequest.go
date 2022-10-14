package shared

type UpdateTrustRequest struct {
	SelectiveAuth *SelectiveAuthEnum `json:"SelectiveAuth,omitempty"`
	TrustID       string             `json:"TrustId"`
}
