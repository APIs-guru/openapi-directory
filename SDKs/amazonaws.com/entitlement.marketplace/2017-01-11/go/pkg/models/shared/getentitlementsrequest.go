package shared



type GetEntitlementsRequest struct {
    Filter map[string][]string `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ProductCode string `json:"ProductCode"`
    
}

