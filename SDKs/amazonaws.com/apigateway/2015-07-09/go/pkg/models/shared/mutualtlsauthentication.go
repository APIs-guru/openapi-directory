package shared

type MutualTLSAuthentication struct {
	TruststoreURI      *string  `json:"truststoreUri"`
	TruststoreVersion  *string  `json:"truststoreVersion"`
	TruststoreWarnings []string `json:"truststoreWarnings"`
}
