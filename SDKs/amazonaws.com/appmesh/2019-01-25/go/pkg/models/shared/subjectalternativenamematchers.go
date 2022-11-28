package shared

// SubjectAlternativeNameMatchers
// An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
type SubjectAlternativeNameMatchers struct {
	Exact []string `json:"exact"`
}
