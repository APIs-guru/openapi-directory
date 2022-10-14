package shared

type UpdateSchemaResponse struct {
	RegistryName *string `json:"RegistryName,omitempty"`
	SchemaArn    *string `json:"SchemaArn,omitempty"`
	SchemaName   *string `json:"SchemaName,omitempty"`
}
