package shared



type GetDevEndpointsResponse struct {
    DevEndpoints []DevEndpoint `json:"DevEndpoints,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

