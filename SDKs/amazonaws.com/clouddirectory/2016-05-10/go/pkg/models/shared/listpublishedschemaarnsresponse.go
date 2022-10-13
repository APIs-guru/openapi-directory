package shared

type ListPublishedSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken"`
	SchemaArns []string `json:"SchemaArns"`
}
