package shared



type ListServicesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ServiceArns []string `json:"serviceArns,omitempty"`
    
}

