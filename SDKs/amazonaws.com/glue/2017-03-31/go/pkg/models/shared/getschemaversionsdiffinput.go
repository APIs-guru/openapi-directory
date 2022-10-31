package shared

type GetSchemaVersionsDiffInput struct {
	FirstSchemaVersionNumber  SchemaVersionNumber `json:"FirstSchemaVersionNumber"`
	SchemaDiffType            SchemaDiffTypeEnum  `json:"SchemaDiffType"`
	SchemaID                  SchemaID            `json:"SchemaId"`
	SecondSchemaVersionNumber SchemaVersionNumber `json:"SecondSchemaVersionNumber"`
}
