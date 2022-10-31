package shared



type ClientPolicyTLS struct {
    Certificate *ClientTLSCertificate `json:"certificate,omitempty"`
    Enforce *bool `json:"enforce,omitempty"`
    Ports []int64 `json:"ports,omitempty"`
    Validation TLSValidationContext `json:"validation"`
    
}

