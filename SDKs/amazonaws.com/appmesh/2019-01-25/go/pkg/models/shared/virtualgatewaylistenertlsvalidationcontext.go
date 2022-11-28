package shared

// VirtualGatewayListenerTLSValidationContext
// An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
type VirtualGatewayListenerTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames                        `json:"subjectAlternativeNames,omitempty"`
	Trust                   VirtualGatewayListenerTLSValidationContextTrust `json:"trust"`
}
