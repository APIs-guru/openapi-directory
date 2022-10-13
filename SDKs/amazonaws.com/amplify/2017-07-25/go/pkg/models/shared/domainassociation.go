package shared

type DomainAssociation struct {
	AutoSubDomainCreationPatterns    []string         `json:"autoSubDomainCreationPatterns"`
	AutoSubDomainIamRole             *string          `json:"autoSubDomainIAMRole"`
	CertificateVerificationDNSRecord *string          `json:"certificateVerificationDNSRecord"`
	DomainAssociationArn             string           `json:"domainAssociationArn"`
	DomainName                       string           `json:"domainName"`
	DomainStatus                     DomainStatusEnum `json:"domainStatus"`
	EnableAutoSubDomain              bool             `json:"enableAutoSubDomain"`
	StatusReason                     string           `json:"statusReason"`
	SubDomains                       []SubDomain      `json:"subDomains"`
}
