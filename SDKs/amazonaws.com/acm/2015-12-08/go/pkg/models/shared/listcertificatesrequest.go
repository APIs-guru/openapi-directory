package shared

type ListCertificatesRequest struct {
	CertificateStatuses []CertificateStatusEnum `json:"CertificateStatuses,omitempty"`
	Includes            *Filters                `json:"Includes,omitempty"`
	MaxItems            *int64                  `json:"MaxItems,omitempty"`
	NextToken           *string                 `json:"NextToken,omitempty"`
}
