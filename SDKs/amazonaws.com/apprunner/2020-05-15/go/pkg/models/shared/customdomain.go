package shared

type CustomDomain struct {
	CertificateValidationRecords []CertificateValidationRecord     `json:"CertificateValidationRecords"`
	DomainName                   string                            `json:"DomainName"`
	EnableWwwSubdomain           bool                              `json:"EnableWWWSubdomain"`
	Status                       CustomDomainAssociationStatusEnum `json:"Status"`
}
