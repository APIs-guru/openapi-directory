package shared

type UpdateSchemaResponse struct {
	RegistryName *string `json:"RegistryName"`
	SchemaArn    *string `json:"SchemaArn"`
	SchemaName   *string `json:"SchemaName"`
}
