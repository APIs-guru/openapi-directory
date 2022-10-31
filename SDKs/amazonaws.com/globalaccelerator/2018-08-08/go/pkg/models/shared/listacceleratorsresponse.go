package shared



type ListAcceleratorsResponse struct {
    Accelerators []Accelerator `json:"Accelerators,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

