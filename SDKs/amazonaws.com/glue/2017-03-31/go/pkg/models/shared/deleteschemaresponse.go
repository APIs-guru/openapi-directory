package shared

type DeleteSchemaResponse struct {
	SchemaArn  *string           `json:"SchemaArn"`
	SchemaName *string           `json:"SchemaName"`
	Status     *SchemaStatusEnum `json:"Status"`
}
