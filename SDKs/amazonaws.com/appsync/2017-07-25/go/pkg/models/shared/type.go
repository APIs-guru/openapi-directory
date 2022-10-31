package shared



type Type struct {
    Arn *string `json:"arn,omitempty"`
    Definition *string `json:"definition,omitempty"`
    Description *string `json:"description,omitempty"`
    Format *TypeDefinitionFormatEnum `json:"format,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

