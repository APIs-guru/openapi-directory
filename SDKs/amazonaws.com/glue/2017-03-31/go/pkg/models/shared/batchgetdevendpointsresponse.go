package shared



type BatchGetDevEndpointsResponse struct {
    DevEndpoints []DevEndpoint `json:"DevEndpoints,omitempty"`
    DevEndpointsNotFound []string `json:"DevEndpointsNotFound,omitempty"`
    
}

