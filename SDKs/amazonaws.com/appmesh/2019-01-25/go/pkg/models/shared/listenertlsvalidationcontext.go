package shared



type ListenerTLSValidationContext struct {
    SubjectAlternativeNames *SubjectAlternativeNames `json:"subjectAlternativeNames,omitempty"`
    Trust ListenerTLSValidationContextTrust `json:"trust"`
    
}

