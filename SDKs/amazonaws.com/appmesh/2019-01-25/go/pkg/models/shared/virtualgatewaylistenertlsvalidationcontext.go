package shared

type VirtualGatewayListenerTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames                        `json:"subjectAlternativeNames,omitempty"`
	Trust                   VirtualGatewayListenerTLSValidationContextTrust `json:"trust"`
}
