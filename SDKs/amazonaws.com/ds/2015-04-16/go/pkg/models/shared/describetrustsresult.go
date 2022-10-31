package shared



type DescribeTrustsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Trusts []Trust `json:"Trusts,omitempty"`
    
}

