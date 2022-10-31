package shared



type ListCustomRoutingAcceleratorsResponse struct {
    Accelerators []CustomRoutingAccelerator `json:"Accelerators,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

