package shared



type SchemaListItem struct {
    CreatedTime *string `json:"CreatedTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    RegistryName *string `json:"RegistryName,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    SchemaName *string `json:"SchemaName,omitempty"`
    SchemaStatus *SchemaStatusEnum `json:"SchemaStatus,omitempty"`
    UpdatedTime *string `json:"UpdatedTime,omitempty"`
    
}

