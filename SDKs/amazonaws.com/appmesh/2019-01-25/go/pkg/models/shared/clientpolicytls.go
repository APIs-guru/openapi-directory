package shared

// ClientPolicyTLS
// A reference to an object that represents a Transport Layer Security (TLS) client policy.
type ClientPolicyTLS struct {
	Certificate *ClientTLSCertificate `json:"certificate,omitempty"`
	Enforce     *bool                 `json:"enforce,omitempty"`
	Ports       []int64               `json:"ports,omitempty"`
	Validation  TLSValidationContext  `json:"validation"`
}
