package shared

// DevicePoolCompatibilityResult
// Represents a device pool compatibility result.
type DevicePoolCompatibilityResult struct {
	Compatible              *bool                    `json:"compatible,omitempty"`
	Device                  *Device                  `json:"device,omitempty"`
	IncompatibilityMessages []IncompatibilityMessage `json:"incompatibilityMessages,omitempty"`
}
