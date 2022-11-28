package shared

// AssetModelHierarchy
// Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
type AssetModelHierarchy struct {
	ChildAssetModelID string  `json:"childAssetModelId"`
	ID                *string `json:"id,omitempty"`
	Name              string  `json:"name"`
}
