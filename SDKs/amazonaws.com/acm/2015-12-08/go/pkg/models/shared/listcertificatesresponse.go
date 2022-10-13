package shared

type ListCertificatesResponse struct {
	CertificateSummaryList []CertificateSummary `json:"CertificateSummaryList"`
	NextToken              *string              `json:"NextToken"`
}
