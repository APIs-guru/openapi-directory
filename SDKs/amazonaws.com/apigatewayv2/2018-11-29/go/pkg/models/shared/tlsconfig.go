package shared

// TLSConfig
// The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
type TLSConfig struct {
	ServerNameToVerify *string `json:"ServerNameToVerify,omitempty"`
}
