package shared

// CreateConnectionOAuthClientRequestParameters
// Contains the Basic authorization parameters to use for the connection.
type CreateConnectionOAuthClientRequestParameters struct {
	ClientID     string `json:"ClientID"`
	ClientSecret string `json:"ClientSecret"`
}
