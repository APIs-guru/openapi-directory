package shared

// ListenerTLS
// An object that represents the Transport Layer Security (TLS) properties for a listener.
type ListenerTLS struct {
	Certificate ListenerTLSCertificate        `json:"certificate"`
	Mode        ListenerTLSModeEnum           `json:"mode"`
	Validation  *ListenerTLSValidationContext `json:"validation,omitempty"`
}
