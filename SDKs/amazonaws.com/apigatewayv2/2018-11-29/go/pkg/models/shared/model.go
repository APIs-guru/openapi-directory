package shared



type Model struct {
    ContentType *string `json:"ContentType,omitempty"`
    Description *string `json:"Description,omitempty"`
    ModelID *string `json:"ModelId,omitempty"`
    Name string `json:"Name"`
    Schema *string `json:"Schema,omitempty"`
    
}

