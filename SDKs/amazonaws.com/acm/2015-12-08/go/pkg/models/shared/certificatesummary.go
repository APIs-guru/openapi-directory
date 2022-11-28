package shared

// CertificateSummary
// This structure is returned in the response object of <a>ListCertificates</a> action.
type CertificateSummary struct {
	CertificateArn *string `json:"CertificateArn,omitempty"`
	DomainName     *string `json:"DomainName,omitempty"`
}
