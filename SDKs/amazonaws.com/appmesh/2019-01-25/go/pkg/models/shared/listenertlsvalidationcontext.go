package shared

type ListenerTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames          `json:"subjectAlternativeNames"`
	Trust                   ListenerTLSValidationContextTrust `json:"trust"`
}
