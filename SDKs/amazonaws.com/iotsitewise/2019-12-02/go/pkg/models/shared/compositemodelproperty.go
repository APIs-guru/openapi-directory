package shared

type CompositeModelProperty struct {
	AssetProperty Property `json:"assetProperty"`
	Name          string   `json:"name"`
	Type          string   `json:"type"`
}
