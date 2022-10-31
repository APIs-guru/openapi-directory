package shared



type DeleteSchemaResponse struct {
    SchemaArn *string `json:"SchemaArn,omitempty"`
    SchemaName *string `json:"SchemaName,omitempty"`
    Status *SchemaStatusEnum `json:"Status,omitempty"`
    
}

