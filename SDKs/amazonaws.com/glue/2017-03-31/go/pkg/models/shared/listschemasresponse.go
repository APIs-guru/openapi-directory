package shared

type ListSchemasResponse struct {
	NextToken *string          `json:"NextToken,omitempty"`
	Schemas   []SchemaListItem `json:"Schemas,omitempty"`
}
