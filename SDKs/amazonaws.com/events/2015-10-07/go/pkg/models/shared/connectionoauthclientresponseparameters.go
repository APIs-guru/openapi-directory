package shared

// ConnectionOAuthClientResponseParameters
// Contains the client response parameters for the connection when OAuth is specified as the authorization type.
type ConnectionOAuthClientResponseParameters struct {
	ClientID *string `json:"ClientID,omitempty"`
}
