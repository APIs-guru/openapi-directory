package shared



type ListControlsResponse struct {
    ControlMetadataList []ControlMetadata `json:"controlMetadataList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

