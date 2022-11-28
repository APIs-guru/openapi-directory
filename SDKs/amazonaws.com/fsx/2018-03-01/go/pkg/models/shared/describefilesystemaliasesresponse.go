package shared

// DescribeFileSystemAliasesResponse
// The response object for <code>DescribeFileSystemAliases</code> operation.
type DescribeFileSystemAliasesResponse struct {
	Aliases   []Alias `json:"Aliases,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
