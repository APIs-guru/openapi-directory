package shared

type Device struct {
	Attributes map[string]interface{} `json:"Attributes,omitempty"`
	DeviceID   *string                `json:"DeviceId,omitempty"`
	Type       *string                `json:"Type,omitempty"`
}
