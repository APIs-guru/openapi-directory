package shared

// GetDevicePoolCompatibilityResult
// Represents the result of describe device pool compatibility request.
type GetDevicePoolCompatibilityResult struct {
	CompatibleDevices   []DevicePoolCompatibilityResult `json:"compatibleDevices,omitempty"`
	IncompatibleDevices []DevicePoolCompatibilityResult `json:"incompatibleDevices,omitempty"`
}
