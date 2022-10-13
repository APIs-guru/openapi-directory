package shared

type IncompatibilityMessage struct {
	Message *string              `json:"message"`
	Type    *DeviceAttributeEnum `json:"type"`
}
