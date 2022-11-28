package shared

// ListAliasesOutput
// Represents the returned data in response to a request operation.
type ListAliasesOutput struct {
	Aliases   []Alias `json:"Aliases,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
