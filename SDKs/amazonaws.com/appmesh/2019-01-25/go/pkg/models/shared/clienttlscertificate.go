package shared

// ClientTLSCertificate
// An object that represents the client's certificate.
type ClientTLSCertificate struct {
	File *ListenerTLSFileCertificate `json:"file,omitempty"`
	Sds  *ListenerTLSSdsCertificate  `json:"sds,omitempty"`
}
