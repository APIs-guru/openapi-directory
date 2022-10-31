package shared



type ListPublishedSchemaArnsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SchemaArns []string `json:"SchemaArns,omitempty"`
    
}

