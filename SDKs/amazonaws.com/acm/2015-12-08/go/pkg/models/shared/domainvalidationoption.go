package shared

// DomainValidationOption
// Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
type DomainValidationOption struct {
	DomainName       string `json:"DomainName"`
	ValidationDomain string `json:"ValidationDomain"`
}
