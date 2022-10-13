package shared

type DescribeCustomDomainsResponse struct {
	CustomDomains []CustomDomain `json:"CustomDomains"`
	DNSTarget     string         `json:"DNSTarget"`
	NextToken     *string        `json:"NextToken"`
	ServiceArn    string         `json:"ServiceArn"`
}
