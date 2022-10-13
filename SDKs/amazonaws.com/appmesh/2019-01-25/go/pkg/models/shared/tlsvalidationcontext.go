package shared

type TLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames  `json:"subjectAlternativeNames"`
	Trust                   TLSValidationContextTrust `json:"trust"`
}
