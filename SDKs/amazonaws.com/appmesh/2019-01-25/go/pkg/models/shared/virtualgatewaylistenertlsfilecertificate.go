package shared

type VirtualGatewayListenerTLSFileCertificate struct {
	CertificateChain string `json:"certificateChain"`
	PrivateKey       string `json:"privateKey"`
}
