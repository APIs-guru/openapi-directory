package shared

type DisassociateCustomDomainResponse struct {
	CustomDomain CustomDomain `json:"CustomDomain"`
	DNSTarget    string       `json:"DNSTarget"`
	ServiceArn   string       `json:"ServiceArn"`
}
