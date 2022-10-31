package shared



type ListSchemaVersionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Schemas []SchemaVersionListItem `json:"Schemas,omitempty"`
    
}

