package shared

type DomainValidation struct {
	DomainName       string                `json:"DomainName"`
	ResourceRecord   *ResourceRecord       `json:"ResourceRecord,omitempty"`
	ValidationDomain *string               `json:"ValidationDomain,omitempty"`
	ValidationEmails []string              `json:"ValidationEmails,omitempty"`
	ValidationMethod *ValidationMethodEnum `json:"ValidationMethod,omitempty"`
	ValidationStatus *DomainStatusEnum     `json:"ValidationStatus,omitempty"`
}
