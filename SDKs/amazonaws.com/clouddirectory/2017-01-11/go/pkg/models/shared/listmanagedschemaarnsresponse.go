package shared

type ListManagedSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken"`
	SchemaArns []string `json:"SchemaArns"`
}
