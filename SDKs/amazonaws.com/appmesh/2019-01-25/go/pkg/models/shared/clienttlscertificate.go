package shared

type ClientTLSCertificate struct {
	File *ListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *ListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
