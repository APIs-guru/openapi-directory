package shared

type ListenerTLSCertificate struct {
	Acm  *ListenerTLSAcmCertificate  `json:"acm,omitempty"`
	File *ListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *ListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
