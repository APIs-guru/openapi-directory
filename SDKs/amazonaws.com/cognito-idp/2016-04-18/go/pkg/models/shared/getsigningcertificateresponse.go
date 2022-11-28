package shared

// GetSigningCertificateResponse
// Response from Cognito for a signing certificate request.
type GetSigningCertificateResponse struct {
	Certificate *string `json:"Certificate,omitempty"`
}
