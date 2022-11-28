package shared

// AssetModelCompositeModelDefinition
// Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
type AssetModelCompositeModelDefinition struct {
	Description *string      `json:"description,omitempty"`
	Name        string       `json:"name"`
	Properties  *interface{} `json:"properties,omitempty"`
	Type        string       `json:"type"`
}
