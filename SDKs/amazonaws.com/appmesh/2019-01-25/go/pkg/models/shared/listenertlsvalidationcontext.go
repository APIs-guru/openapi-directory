package shared

// ListenerTLSValidationContext
// An object that represents a listener's Transport Layer Security (TLS) validation context.
type ListenerTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames          `json:"subjectAlternativeNames,omitempty"`
	Trust                   ListenerTLSValidationContextTrust `json:"trust"`
}
