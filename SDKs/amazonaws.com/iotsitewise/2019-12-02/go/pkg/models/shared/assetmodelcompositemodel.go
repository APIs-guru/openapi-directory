package shared

// AssetModelCompositeModel
// Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
type AssetModelCompositeModel struct {
	Description *string      `json:"description,omitempty"`
	Name        string       `json:"name"`
	Properties  *interface{} `json:"properties,omitempty"`
	Type        string       `json:"type"`
}
