package shared

type MutualTLSAuthentication struct {
	TruststoreURI      *string  `json:"TruststoreUri,omitempty"`
	TruststoreVersion  *string  `json:"TruststoreVersion,omitempty"`
	TruststoreWarnings []string `json:"TruststoreWarnings,omitempty"`
}
