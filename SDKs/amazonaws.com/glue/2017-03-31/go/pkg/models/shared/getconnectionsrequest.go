package shared



type GetConnectionsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    Filter *GetConnectionsFilter `json:"Filter,omitempty"`
    HidePassword *bool `json:"HidePassword,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

