package shared

// AssetModelHierarchyDefinition
// Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
type AssetModelHierarchyDefinition struct {
	ChildAssetModelID string `json:"childAssetModelId"`
	Name              string `json:"name"`
}
