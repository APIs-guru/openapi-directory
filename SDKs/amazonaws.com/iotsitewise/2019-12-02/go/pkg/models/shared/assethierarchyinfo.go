package shared

// AssetHierarchyInfo
// Contains information about a parent asset and a child asset that are related through an asset hierarchy.
type AssetHierarchyInfo struct {
	ChildAssetID  *string `json:"childAssetId,omitempty"`
	ParentAssetID *string `json:"parentAssetId,omitempty"`
}
