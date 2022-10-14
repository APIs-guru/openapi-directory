package shared

type ListDevelopmentSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken,omitempty"`
	SchemaArns []string `json:"SchemaArns,omitempty"`
}
