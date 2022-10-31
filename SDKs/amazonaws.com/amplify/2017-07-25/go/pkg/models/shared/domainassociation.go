package shared

type DomainAssociation struct {
	AutoSubDomainCreationPatterns    []string         `json:"autoSubDomainCreationPatterns,omitempty"`
	AutoSubDomainIamRole             *string          `json:"autoSubDomainIAMRole,omitempty"`
	CertificateVerificationDNSRecord *string          `json:"certificateVerificationDNSRecord,omitempty"`
	DomainAssociationArn             string           `json:"domainAssociationArn"`
	DomainName                       string           `json:"domainName"`
	DomainStatus                     DomainStatusEnum `json:"domainStatus"`
	EnableAutoSubDomain              bool             `json:"enableAutoSubDomain"`
	StatusReason                     string           `json:"statusReason"`
	SubDomains                       []SubDomain      `json:"subDomains"`
}
