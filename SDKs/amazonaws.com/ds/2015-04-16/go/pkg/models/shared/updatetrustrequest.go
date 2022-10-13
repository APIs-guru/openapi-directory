package shared

type UpdateTrustRequest struct {
	SelectiveAuth *SelectiveAuthEnum `json:"SelectiveAuth"`
	TrustID       string             `json:"TrustId"`
}
