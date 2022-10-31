package shared

type DescribeFileSystemAliasesResponse struct {
	Aliases   []Alias `json:"Aliases,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
