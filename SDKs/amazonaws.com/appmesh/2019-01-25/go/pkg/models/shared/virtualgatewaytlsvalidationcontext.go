package shared

type VirtualGatewayTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames                `json:"subjectAlternativeNames"`
	Trust                   VirtualGatewayTLSValidationContextTrust `json:"trust"`
}
