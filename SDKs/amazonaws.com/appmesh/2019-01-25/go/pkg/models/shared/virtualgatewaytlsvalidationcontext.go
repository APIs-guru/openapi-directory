package shared

// VirtualGatewayTLSValidationContext
// An object that represents a Transport Layer Security (TLS) validation context.
type VirtualGatewayTLSValidationContext struct {
	SubjectAlternativeNames *SubjectAlternativeNames                `json:"subjectAlternativeNames,omitempty"`
	Trust                   VirtualGatewayTLSValidationContextTrust `json:"trust"`
}
