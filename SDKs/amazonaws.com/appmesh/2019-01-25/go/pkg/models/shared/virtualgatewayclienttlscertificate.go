package shared

type VirtualGatewayClientTLSCertificate struct {
	File *VirtualGatewayListenerTLSFileCertificate `json:"file"`
	Sds  *VirtualGatewayListenerTLSSdsCertificate  `json:"sds"`
}
