package shared



type ListRunsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Runs []Run `json:"runs,omitempty"`
    
}

