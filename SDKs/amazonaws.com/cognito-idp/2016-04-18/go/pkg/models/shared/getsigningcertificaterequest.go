package shared

// GetSigningCertificateRequest
// Request to get a signing certificate from Cognito.
type GetSigningCertificateRequest struct {
	UserPoolID string `json:"UserPoolId"`
}
