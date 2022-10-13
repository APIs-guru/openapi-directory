package shared

import (
	"time"
)

type DescribeAssetResponse struct {
	AssetArn             string                `json:"assetArn"`
	AssetCompositeModels []AssetCompositeModel `json:"assetCompositeModels"`
	AssetCreationDate    time.Time             `json:"assetCreationDate"`
	AssetHierarchies     []AssetHierarchy      `json:"assetHierarchies"`
	AssetID              string                `json:"assetId"`
	AssetLastUpdateDate  time.Time             `json:"assetLastUpdateDate"`
	AssetModelID         string                `json:"assetModelId"`
	AssetName            string                `json:"assetName"`
	AssetProperties      []AssetProperty       `json:"assetProperties"`
	AssetStatus          AssetStatus           `json:"assetStatus"`
}
