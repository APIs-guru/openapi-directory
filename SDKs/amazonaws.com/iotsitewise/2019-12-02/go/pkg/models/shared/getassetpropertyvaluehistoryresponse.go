package shared



type GetAssetPropertyValueHistoryResponse struct {
    AssetPropertyValueHistory []AssetPropertyValue `json:"assetPropertyValueHistory"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

