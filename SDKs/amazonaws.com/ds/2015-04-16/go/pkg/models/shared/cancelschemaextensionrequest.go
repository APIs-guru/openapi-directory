package shared

type CancelSchemaExtensionRequest struct {
	DirectoryID       string `json:"DirectoryId"`
	SchemaExtensionID string `json:"SchemaExtensionId"`
}
