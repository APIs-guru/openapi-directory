package shared

type GetSchemaCreationStatusResponse struct {
	Details *string           `json:"details,omitempty"`
	Status  *SchemaStatusEnum `json:"status,omitempty"`
}
