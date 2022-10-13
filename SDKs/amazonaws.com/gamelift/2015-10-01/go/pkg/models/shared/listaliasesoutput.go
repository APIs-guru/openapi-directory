package shared

type ListAliasesOutput struct {
	Aliases   []Alias `json:"Aliases"`
	NextToken *string `json:"NextToken"`
}
