package shared

// GetCredentialsForIdentityResponse
// Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
type GetCredentialsForIdentityResponse struct {
	Credentials *Credentials `json:"Credentials,omitempty"`
	IdentityID  *string      `json:"IdentityId,omitempty"`
}
