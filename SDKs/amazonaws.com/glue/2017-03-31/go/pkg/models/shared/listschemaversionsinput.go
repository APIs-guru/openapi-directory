package shared



type ListSchemaVersionsInput struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SchemaID SchemaID `json:"SchemaId"`
    
}

