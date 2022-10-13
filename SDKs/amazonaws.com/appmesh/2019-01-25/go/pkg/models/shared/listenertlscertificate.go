package shared

type ListenerTLSCertificate struct {
	Acm  *ListenerTLSAcmCertificate  `json:"acm"`
	File *ListenerTLSFileCertificate `json:"file"`
	Sds  *ListenerTLSSdsCertificate  `json:"sds"`
}
