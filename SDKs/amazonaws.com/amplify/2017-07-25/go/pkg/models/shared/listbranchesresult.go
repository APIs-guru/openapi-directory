package shared



type ListBranchesResult struct {
    Branches []Branch `json:"branches"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

