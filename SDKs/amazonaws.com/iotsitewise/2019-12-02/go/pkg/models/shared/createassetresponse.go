package shared

type CreateAssetResponse struct {
	AssetArn    string      `json:"assetArn"`
	AssetID     string      `json:"assetId"`
	AssetStatus AssetStatus `json:"assetStatus"`
}
