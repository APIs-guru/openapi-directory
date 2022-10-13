package shared

type Device struct {
	Attributes map[string]interface{} `json:"Attributes"`
	DeviceID   *string                `json:"DeviceId"`
	Type       *string                `json:"Type"`
}
