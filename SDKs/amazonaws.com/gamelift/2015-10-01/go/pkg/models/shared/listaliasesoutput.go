package shared



type ListAliasesOutput struct {
    Aliases []Alias `json:"Aliases,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

