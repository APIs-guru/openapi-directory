package shared

// Property
// Contains asset property information.
type Property struct {
	Alias        *string               `json:"alias,omitempty"`
	DataType     PropertyDataTypeEnum  `json:"dataType"`
	ID           string                `json:"id"`
	Name         string                `json:"name"`
	Notification *PropertyNotification `json:"notification,omitempty"`
	Type         *PropertyType         `json:"type,omitempty"`
	Unit         *string               `json:"unit,omitempty"`
}
