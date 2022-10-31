package shared



type ListenerTLS struct {
    Certificate ListenerTLSCertificate `json:"certificate"`
    Mode ListenerTLSModeEnum `json:"mode"`
    Validation *ListenerTLSValidationContext `json:"validation,omitempty"`
    
}

