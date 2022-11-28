package shared

// VerifyTrustRequest
// Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.
type VerifyTrustRequest struct {
	TrustID string `json:"TrustId"`
}
