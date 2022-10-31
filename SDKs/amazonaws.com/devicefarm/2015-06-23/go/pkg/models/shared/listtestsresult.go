package shared



type ListTestsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tests []Test `json:"tests,omitempty"`
    
}

