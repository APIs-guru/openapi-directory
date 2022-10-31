package shared



type ListPrincipalThingsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Things []string `json:"things,omitempty"`
    
}

