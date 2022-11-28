package shared

import (
	"time"
)

// AssociatedAssetsSummary
// Contains a summary of an associated asset.
type AssociatedAssetsSummary struct {
	Arn            string           `json:"arn"`
	AssetModelID   string           `json:"assetModelId"`
	CreationDate   time.Time        `json:"creationDate"`
	Hierarchies    []AssetHierarchy `json:"hierarchies"`
	ID             string           `json:"id"`
	LastUpdateDate time.Time        `json:"lastUpdateDate"`
	Name           string           `json:"name"`
	Status         AssetStatus      `json:"status"`
}
