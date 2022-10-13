package shared

type MutualTLSAuthentication struct {
	TruststoreURI      *string  `json:"TruststoreUri"`
	TruststoreVersion  *string  `json:"TruststoreVersion"`
	TruststoreWarnings []string `json:"TruststoreWarnings"`
}
