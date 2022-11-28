package shared

// ConnectionCredentials
// Connection credentials.
type ConnectionCredentials struct {
	ConnectionToken *string `json:"ConnectionToken,omitempty"`
	Expiry          *string `json:"Expiry,omitempty"`
}
