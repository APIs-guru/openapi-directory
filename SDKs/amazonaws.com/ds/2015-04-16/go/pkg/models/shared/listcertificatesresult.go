package shared

type ListCertificatesResult struct {
	CertificatesInfo []CertificateInfo `json:"CertificatesInfo,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
}
