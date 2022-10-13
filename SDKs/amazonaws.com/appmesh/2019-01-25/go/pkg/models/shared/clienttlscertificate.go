package shared

type ClientTLSCertificate struct {
	File *ListenerTLSFileCertificate `json:"file"`
	Sds  *ListenerTLSSdsCertificate  `json:"sds"`
}
