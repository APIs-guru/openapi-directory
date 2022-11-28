package shared

// SchemaID
// The unique ID of the schema in the Glue schema registry.
type SchemaID struct {
	RegistryName *string `json:"RegistryName,omitempty"`
	SchemaArn    *string `json:"SchemaArn,omitempty"`
	SchemaName   *string `json:"SchemaName,omitempty"`
}
