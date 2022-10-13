package shared

type DescribeFileSystemAliasesResponse struct {
	Aliases   []Alias `json:"Aliases"`
	NextToken *string `json:"NextToken"`
}
