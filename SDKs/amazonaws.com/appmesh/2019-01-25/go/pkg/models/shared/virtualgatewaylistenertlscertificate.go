package shared

// VirtualGatewayListenerTLSCertificate
// An object that represents a listener's Transport Layer Security (TLS) certificate.
type VirtualGatewayListenerTLSCertificate struct {
	Acm  *VirtualGatewayListenerTLSAcmCertificate  `json:"acm,omitempty"`
	File *VirtualGatewayListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *VirtualGatewayListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
