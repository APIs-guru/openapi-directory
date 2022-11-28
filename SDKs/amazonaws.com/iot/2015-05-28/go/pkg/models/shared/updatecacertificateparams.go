package shared

// UpdateCaCertificateParams
// Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
type UpdateCaCertificateParams struct {
	Action CaCertificateUpdateActionEnum `json:"action"`
}
