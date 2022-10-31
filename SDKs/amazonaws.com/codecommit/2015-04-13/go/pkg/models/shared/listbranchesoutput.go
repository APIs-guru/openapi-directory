package shared



type ListBranchesOutput struct {
    Branches []string `json:"branches,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

