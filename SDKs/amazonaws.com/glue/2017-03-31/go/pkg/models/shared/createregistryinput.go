package shared



type CreateRegistryInput struct {
    Description *string `json:"Description,omitempty"`
    RegistryName string `json:"RegistryName"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

