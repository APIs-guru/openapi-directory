package shared

type ListSchemaExtensionsResult struct {
	NextToken            *string               `json:"NextToken"`
	SchemaExtensionsInfo []SchemaExtensionInfo `json:"SchemaExtensionsInfo"`
}
