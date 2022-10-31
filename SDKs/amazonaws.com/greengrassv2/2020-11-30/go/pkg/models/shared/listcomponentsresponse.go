package shared



type ListComponentsResponse struct {
    Components []Component `json:"components,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

