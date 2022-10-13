package shared

type CertificateSummary struct {
	CertificateArn *string `json:"CertificateArn"`
	DomainName     *string `json:"DomainName"`
}
