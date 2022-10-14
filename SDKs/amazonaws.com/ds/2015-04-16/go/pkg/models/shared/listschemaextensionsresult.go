package shared

type ListSchemaExtensionsResult struct {
	NextToken            *string               `json:"NextToken,omitempty"`
	SchemaExtensionsInfo []SchemaExtensionInfo `json:"SchemaExtensionsInfo,omitempty"`
}
