package shared

type SchemaID struct {
	RegistryName *string `json:"RegistryName"`
	SchemaArn    *string `json:"SchemaArn"`
	SchemaName   *string `json:"SchemaName"`
}
