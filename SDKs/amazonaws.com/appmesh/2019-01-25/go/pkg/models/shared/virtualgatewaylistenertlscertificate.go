package shared

type VirtualGatewayListenerTLSCertificate struct {
	Acm  *VirtualGatewayListenerTLSAcmCertificate  `json:"acm,omitempty"`
	File *VirtualGatewayListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *VirtualGatewayListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
