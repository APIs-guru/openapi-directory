package shared

type DescribeAssetPropertyResponse struct {
	AssetID        string                  `json:"assetId"`
	AssetModelID   string                  `json:"assetModelId"`
	AssetName      string                  `json:"assetName"`
	AssetProperty  *Property               `json:"assetProperty"`
	CompositeModel *CompositeModelProperty `json:"compositeModel"`
}
