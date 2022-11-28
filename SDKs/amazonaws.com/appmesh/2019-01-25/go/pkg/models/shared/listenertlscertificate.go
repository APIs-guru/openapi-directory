package shared

// ListenerTLSCertificate
// An object that represents a listener's Transport Layer Security (TLS) certificate.
type ListenerTLSCertificate struct {
	Acm  *ListenerTLSAcmCertificate  `json:"acm,omitempty"`
	File *ListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *ListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
