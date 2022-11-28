package shared

// CreateConnectionBasicAuthRequestParameters
// Contains the Basic authorization parameters to use for the connection.
type CreateConnectionBasicAuthRequestParameters struct {
	Password string `json:"Password"`
	Username string `json:"Username"`
}
