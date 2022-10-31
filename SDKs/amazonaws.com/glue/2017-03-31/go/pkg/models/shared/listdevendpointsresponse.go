package shared



type ListDevEndpointsResponse struct {
    DevEndpointNames []string `json:"DevEndpointNames,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

