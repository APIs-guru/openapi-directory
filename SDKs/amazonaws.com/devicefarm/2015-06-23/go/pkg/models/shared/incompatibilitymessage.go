package shared

// IncompatibilityMessage
// Represents information about incompatibility.
type IncompatibilityMessage struct {
	Message *string              `json:"message,omitempty"`
	Type    *DeviceAttributeEnum `json:"type,omitempty"`
}
