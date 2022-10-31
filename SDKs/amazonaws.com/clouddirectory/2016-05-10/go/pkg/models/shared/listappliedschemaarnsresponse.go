package shared

type ListAppliedSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken,omitempty"`
	SchemaArns []string `json:"SchemaArns,omitempty"`
}
