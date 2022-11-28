package shared

// CustomDomain
// Describes a custom domain that's associated with an AWS App Runner service.
type CustomDomain struct {
	CertificateValidationRecords []CertificateValidationRecord     `json:"CertificateValidationRecords,omitempty"`
	DomainName                   string                            `json:"DomainName"`
	EnableWwwSubdomain           bool                              `json:"EnableWWWSubdomain"`
	Status                       CustomDomainAssociationStatusEnum `json:"Status"`
}
