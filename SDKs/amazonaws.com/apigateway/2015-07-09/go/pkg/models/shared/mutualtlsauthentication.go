package shared



type MutualTLSAuthentication struct {
    TruststoreURI *string `json:"truststoreUri,omitempty"`
    TruststoreVersion *string `json:"truststoreVersion,omitempty"`
    TruststoreWarnings []string `json:"truststoreWarnings,omitempty"`
    
}

