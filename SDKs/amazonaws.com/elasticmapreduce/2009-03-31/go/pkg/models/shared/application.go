package shared



type Application struct {
    AdditionalInfo map[string]string `json:"AdditionalInfo,omitempty"`
    Args []string `json:"Args,omitempty"`
    Name *string `json:"Name,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

