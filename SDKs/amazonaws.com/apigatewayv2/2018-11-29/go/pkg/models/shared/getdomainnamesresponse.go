package shared

type GetDomainNamesResponse struct {
	Items     []DomainName `json:"Items"`
	NextToken *string      `json:"NextToken"`
}
