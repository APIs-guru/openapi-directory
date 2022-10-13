package shared

type UpdateSchemaInput struct {
	Compatibility       *CompatibilityEnum   `json:"Compatibility"`
	Description         *string              `json:"Description"`
	SchemaID            SchemaID             `json:"SchemaId"`
	SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber"`
}
