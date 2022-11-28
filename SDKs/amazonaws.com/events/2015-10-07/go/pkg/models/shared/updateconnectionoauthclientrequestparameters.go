package shared

// UpdateConnectionOAuthClientRequestParameters
// Contains the OAuth authorization parameters to use for the connection.
type UpdateConnectionOAuthClientRequestParameters struct {
	ClientID     *string `json:"ClientID,omitempty"`
	ClientSecret *string `json:"ClientSecret,omitempty"`
}
