package shared



type DescribeAssetPropertyResponse struct {
    AssetID string `json:"assetId"`
    AssetModelID string `json:"assetModelId"`
    AssetName string `json:"assetName"`
    AssetProperty *Property `json:"assetProperty,omitempty"`
    CompositeModel *CompositeModelProperty `json:"compositeModel,omitempty"`
    
}

