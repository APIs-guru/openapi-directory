package shared

type AssetModelProperty struct {
	DataType     PropertyDataTypeEnum `json:"dataType"`
	DataTypeSpec *string              `json:"dataTypeSpec"`
	ID           *string              `json:"id"`
	Name         string               `json:"name"`
	Type         PropertyType         `json:"type"`
	Unit         *string              `json:"unit"`
}
