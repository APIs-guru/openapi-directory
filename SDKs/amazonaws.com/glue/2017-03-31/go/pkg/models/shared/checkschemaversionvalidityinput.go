package shared

type CheckSchemaVersionValidityInput struct {
	DataFormat       DataFormatEnum `json:"DataFormat"`
	SchemaDefinition string         `json:"SchemaDefinition"`
}
