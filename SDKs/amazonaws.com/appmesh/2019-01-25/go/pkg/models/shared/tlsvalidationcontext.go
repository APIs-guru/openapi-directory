package shared



type TLSValidationContext struct {
    SubjectAlternativeNames *SubjectAlternativeNames `json:"subjectAlternativeNames,omitempty"`
    Trust TLSValidationContextTrust `json:"trust"`
    
}

