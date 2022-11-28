package shared

// MutualTLSAuthentication
// If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
type MutualTLSAuthentication struct {
	TruststoreURI      *string  `json:"truststoreUri,omitempty"`
	TruststoreVersion  *string  `json:"truststoreVersion,omitempty"`
	TruststoreWarnings []string `json:"truststoreWarnings,omitempty"`
}
