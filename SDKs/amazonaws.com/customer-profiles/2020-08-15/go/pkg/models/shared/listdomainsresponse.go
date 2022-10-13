package shared

type ListDomainsResponse struct {
	Items     []ListDomainItem `json:"Items"`
	NextToken *string          `json:"NextToken"`
}
