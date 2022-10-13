package shared

type DomainValidation struct {
	DomainName       string                `json:"DomainName"`
	ResourceRecord   *ResourceRecord       `json:"ResourceRecord"`
	ValidationDomain *string               `json:"ValidationDomain"`
	ValidationEmails []string              `json:"ValidationEmails"`
	ValidationMethod *ValidationMethodEnum `json:"ValidationMethod"`
	ValidationStatus *DomainStatusEnum     `json:"ValidationStatus"`
}
