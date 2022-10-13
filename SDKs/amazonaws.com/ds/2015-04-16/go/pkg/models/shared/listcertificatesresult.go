package shared

type ListCertificatesResult struct {
	CertificatesInfo []CertificateInfo `json:"CertificatesInfo"`
	NextToken        *string           `json:"NextToken"`
}
