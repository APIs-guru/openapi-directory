package shared

type DeregisterCertificateRequest struct {
	CertificateID string `json:"CertificateId"`
	DirectoryID   string `json:"DirectoryId"`
}
