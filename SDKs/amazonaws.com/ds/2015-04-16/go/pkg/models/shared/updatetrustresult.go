package shared

type UpdateTrustResult struct {
	RequestID *string `json:"RequestId,omitempty"`
	TrustID   *string `json:"TrustId,omitempty"`
}
