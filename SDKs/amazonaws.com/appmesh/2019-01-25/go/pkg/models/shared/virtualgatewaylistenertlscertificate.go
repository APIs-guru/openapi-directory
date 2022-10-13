package shared

type VirtualGatewayListenerTLSCertificate struct {
	Acm  *VirtualGatewayListenerTLSAcmCertificate  `json:"acm"`
	File *VirtualGatewayListenerTLSFileCertificate `json:"file"`
	Sds  *VirtualGatewayListenerTLSSdsCertificate  `json:"sds"`
}
