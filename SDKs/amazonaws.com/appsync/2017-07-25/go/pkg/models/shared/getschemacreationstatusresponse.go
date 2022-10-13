package shared

type GetSchemaCreationStatusResponse struct {
	Details *string           `json:"details"`
	Status  *SchemaStatusEnum `json:"status"`
}
