package shared



type ListTableMetadataOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    TableMetadataList []TableMetadata `json:"TableMetadataList,omitempty"`
    
}

