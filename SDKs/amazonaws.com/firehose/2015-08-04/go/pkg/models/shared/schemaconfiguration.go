package shared



type SchemaConfiguration struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName *string `json:"DatabaseName,omitempty"`
    Region *string `json:"Region,omitempty"`
    RoleArn *string `json:"RoleARN,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    VersionID *string `json:"VersionId,omitempty"`
    
}

