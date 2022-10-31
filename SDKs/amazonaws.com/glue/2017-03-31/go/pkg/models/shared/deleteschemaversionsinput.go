package shared

type DeleteSchemaVersionsInput struct {
	SchemaID SchemaID `json:"SchemaId"`
	Versions string   `json:"Versions"`
}
