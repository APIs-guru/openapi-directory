package shared

type RegisterCertificateRequest struct {
	CertificateData        string                  `json:"CertificateData"`
	ClientCertAuthSettings *ClientCertAuthSettings `json:"ClientCertAuthSettings"`
	DirectoryID            string                  `json:"DirectoryId"`
	Type                   *CertificateTypeEnum    `json:"Type"`
}
