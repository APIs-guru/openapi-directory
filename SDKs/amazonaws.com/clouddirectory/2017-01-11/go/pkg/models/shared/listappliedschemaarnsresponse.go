package shared

type ListAppliedSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken"`
	SchemaArns []string `json:"SchemaArns"`
}
