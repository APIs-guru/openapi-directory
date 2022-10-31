package shared



type DescribeCapacityProvidersResponse struct {
    CapacityProviders []CapacityProvider `json:"capacityProviders,omitempty"`
    Failures []Failure `json:"failures,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

