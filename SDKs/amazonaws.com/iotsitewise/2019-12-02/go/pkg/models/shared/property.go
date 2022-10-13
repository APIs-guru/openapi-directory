package shared

type Property struct {
	Alias        *string               `json:"alias"`
	DataType     PropertyDataTypeEnum  `json:"dataType"`
	ID           string                `json:"id"`
	Name         string                `json:"name"`
	Notification *PropertyNotification `json:"notification"`
	Type         *PropertyType         `json:"type"`
	Unit         *string               `json:"unit"`
}
