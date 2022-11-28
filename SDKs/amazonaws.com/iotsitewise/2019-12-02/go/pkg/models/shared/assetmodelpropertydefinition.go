package shared

// AssetModelPropertyDefinition
// Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
type AssetModelPropertyDefinition struct {
	DataType     PropertyDataTypeEnum `json:"dataType"`
	DataTypeSpec *string              `json:"dataTypeSpec,omitempty"`
	Name         string               `json:"name"`
	Type         PropertyType         `json:"type"`
	Unit         *string              `json:"unit,omitempty"`
}
