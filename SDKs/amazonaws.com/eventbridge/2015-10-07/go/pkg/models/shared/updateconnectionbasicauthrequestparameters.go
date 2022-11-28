package shared

// UpdateConnectionBasicAuthRequestParameters
// Contains the Basic authorization parameters for the connection.
type UpdateConnectionBasicAuthRequestParameters struct {
	Password *string `json:"Password,omitempty"`
	Username *string `json:"Username,omitempty"`
}
