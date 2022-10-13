package shared

type CreateSchemaInput struct {
	Compatibility    *CompatibilityEnum `json:"Compatibility"`
	DataFormat       DataFormatEnum     `json:"DataFormat"`
	Description      *string            `json:"Description"`
	RegistryID       *RegistryID        `json:"RegistryId"`
	SchemaDefinition *string            `json:"SchemaDefinition"`
	SchemaName       string             `json:"SchemaName"`
	Tags             map[string]string  `json:"Tags"`
}
