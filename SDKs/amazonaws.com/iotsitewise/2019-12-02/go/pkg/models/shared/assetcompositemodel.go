package shared

// AssetCompositeModel
// Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
type AssetCompositeModel struct {
	Description *string     `json:"description,omitempty"`
	Name        string      `json:"name"`
	Properties  interface{} `json:"properties"`
	Type        string      `json:"type"`
}
