package shared



type Field struct {
    Name *string `json:"name,omitempty"`
    Type *FieldTypeEnum `json:"type,omitempty"`
    
}

