package shared

type ListHostsOutput struct {
	Hosts     []Host  `json:"Hosts"`
	NextToken *string `json:"NextToken"`
}
