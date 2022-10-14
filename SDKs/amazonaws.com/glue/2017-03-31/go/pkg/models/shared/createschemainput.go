package shared

type CreateSchemaInput struct {
	Compatibility    *CompatibilityEnum `json:"Compatibility,omitempty"`
	DataFormat       DataFormatEnum     `json:"DataFormat"`
	Description      *string            `json:"Description,omitempty"`
	RegistryID       *RegistryID        `json:"RegistryId,omitempty"`
	SchemaDefinition *string            `json:"SchemaDefinition,omitempty"`
	SchemaName       string             `json:"SchemaName"`
	Tags             map[string]string  `json:"Tags,omitempty"`
}
