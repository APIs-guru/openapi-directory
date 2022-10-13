package shared

type ListSchemaVersionsResponse struct {
	NextToken *string                 `json:"NextToken"`
	Schemas   []SchemaVersionListItem `json:"Schemas"`
}
