package shared



type ListSuitesResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Suites []Suite `json:"suites,omitempty"`
    
}

