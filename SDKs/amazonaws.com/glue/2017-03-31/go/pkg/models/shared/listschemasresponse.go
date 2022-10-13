package shared

type ListSchemasResponse struct {
	NextToken *string          `json:"NextToken"`
	Schemas   []SchemaListItem `json:"Schemas"`
}
