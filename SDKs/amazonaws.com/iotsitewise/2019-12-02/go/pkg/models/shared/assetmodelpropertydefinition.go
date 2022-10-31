package shared

type AssetModelPropertyDefinition struct {
	DataType     PropertyDataTypeEnum `json:"dataType"`
	DataTypeSpec *string              `json:"dataTypeSpec,omitempty"`
	Name         string               `json:"name"`
	Type         PropertyType         `json:"type"`
	Unit         *string              `json:"unit,omitempty"`
}
