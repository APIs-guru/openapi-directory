package shared

// VirtualGatewayListenerTLSSdsCertificate
// An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.
type VirtualGatewayListenerTLSSdsCertificate struct {
	SecretName string `json:"secretName"`
}
