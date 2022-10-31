package shared



type ListConnectionsRequest struct {
    ConnectionName *string `json:"ConnectionName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

