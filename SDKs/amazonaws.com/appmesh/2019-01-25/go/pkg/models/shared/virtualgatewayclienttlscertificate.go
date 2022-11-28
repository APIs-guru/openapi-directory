package shared

// VirtualGatewayClientTLSCertificate
// An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
type VirtualGatewayClientTLSCertificate struct {
	File *VirtualGatewayListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *VirtualGatewayListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
