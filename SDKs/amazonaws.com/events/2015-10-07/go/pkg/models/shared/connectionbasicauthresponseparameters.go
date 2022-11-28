package shared

// ConnectionBasicAuthResponseParameters
// Contains the authorization parameters for the connection if Basic is specified as the authorization type.
type ConnectionBasicAuthResponseParameters struct {
	Username *string `json:"Username,omitempty"`
}
