package shared

type ListDevelopmentSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken"`
	SchemaArns []string `json:"SchemaArns"`
}
