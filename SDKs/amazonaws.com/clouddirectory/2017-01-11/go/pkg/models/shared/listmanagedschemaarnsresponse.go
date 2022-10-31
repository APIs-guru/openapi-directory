package shared

type ListManagedSchemaArnsResponse struct {
	NextToken  *string  `json:"NextToken,omitempty"`
	SchemaArns []string `json:"SchemaArns,omitempty"`
}
