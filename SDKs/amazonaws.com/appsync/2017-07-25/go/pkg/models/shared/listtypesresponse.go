package shared



type ListTypesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Types []Type `json:"types,omitempty"`
    
}

