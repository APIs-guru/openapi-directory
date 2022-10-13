package shared

type ListCertificatesRequest struct {
	CertificateStatuses []CertificateStatusEnum `json:"CertificateStatuses"`
	Includes            *Filters                `json:"Includes"`
	MaxItems            *int64                  `json:"MaxItems"`
	NextToken           *string                 `json:"NextToken"`
}
