package shared



type ListSamplesResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Samples []Sample `json:"samples,omitempty"`
    
}

