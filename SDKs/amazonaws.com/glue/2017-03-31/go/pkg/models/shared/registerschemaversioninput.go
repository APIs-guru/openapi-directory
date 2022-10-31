package shared

type RegisterSchemaVersionInput struct {
	SchemaDefinition string   `json:"SchemaDefinition"`
	SchemaID         SchemaID `json:"SchemaId"`
}
