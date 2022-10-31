package shared



type UpdateSchemaInput struct {
    Compatibility *CompatibilityEnum `json:"Compatibility,omitempty"`
    Description *string `json:"Description,omitempty"`
    SchemaID SchemaID `json:"SchemaId"`
    SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber,omitempty"`
    
}

