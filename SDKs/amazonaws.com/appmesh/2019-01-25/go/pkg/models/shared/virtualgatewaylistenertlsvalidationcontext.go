package shared

type VirtualGatewayListenerTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames                        `json:"subjectAlternativeNames"`
	Trust                   VirtualGatewayListenerTLSValidationContextTrust `json:"trust"`
}
