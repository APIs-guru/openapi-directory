package shared

type VirtualGatewayClientTLSCertificate struct {
	File *VirtualGatewayListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *VirtualGatewayListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
