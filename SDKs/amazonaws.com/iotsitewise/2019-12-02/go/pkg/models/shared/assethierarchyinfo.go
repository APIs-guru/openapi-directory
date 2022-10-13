package shared

type AssetHierarchyInfo struct {
	ChildAssetID  *string `json:"childAssetId"`
	ParentAssetID *string `json:"parentAssetId"`
}
