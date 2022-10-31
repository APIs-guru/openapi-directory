package shared



type ListSchemasInput struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    RegistryID *RegistryID `json:"RegistryId,omitempty"`
    
}

