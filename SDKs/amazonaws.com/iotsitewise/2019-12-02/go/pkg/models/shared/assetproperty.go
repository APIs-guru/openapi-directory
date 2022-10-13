package shared

type AssetProperty struct {
	Alias        *string               `json:"alias"`
	DataType     PropertyDataTypeEnum  `json:"dataType"`
	DataTypeSpec *string               `json:"dataTypeSpec"`
	ID           string                `json:"id"`
	Name         string                `json:"name"`
	Notification *PropertyNotification `json:"notification"`
	Unit         *string               `json:"unit"`
}
