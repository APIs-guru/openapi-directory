package shared

type AssetModelProperty struct {
	DataType     PropertyDataTypeEnum `json:"dataType"`
	DataTypeSpec *string              `json:"dataTypeSpec,omitempty"`
	ID           *string              `json:"id,omitempty"`
	Name         string               `json:"name"`
	Type         PropertyType         `json:"type"`
	Unit         *string              `json:"unit,omitempty"`
}
