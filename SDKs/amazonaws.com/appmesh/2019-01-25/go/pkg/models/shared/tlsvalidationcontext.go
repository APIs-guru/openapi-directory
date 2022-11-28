package shared

// TLSValidationContext
// An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
type TLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames  `json:"subjectAlternativeNames,omitempty"`
	Trust                   TLSValidationContextTrust `json:"trust"`
}
