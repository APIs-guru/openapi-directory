package shared

type VirtualGatewayTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames                `json:"subjectAlternativeNames,omitempty"`
	Trust                   VirtualGatewayTLSValidationContextTrust `json:"trust"`
}
