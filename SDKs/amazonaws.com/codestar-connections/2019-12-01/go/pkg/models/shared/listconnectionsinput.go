package shared



type ListConnectionsInput struct {
    HostArnFilter *string `json:"HostArnFilter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ProviderTypeFilter *ProviderTypeEnum `json:"ProviderTypeFilter,omitempty"`
    
}

