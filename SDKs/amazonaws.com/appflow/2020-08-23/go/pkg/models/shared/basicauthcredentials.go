package shared

// BasicAuthCredentials
//
//	The basic auth credentials required for basic authentication.
type BasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}
