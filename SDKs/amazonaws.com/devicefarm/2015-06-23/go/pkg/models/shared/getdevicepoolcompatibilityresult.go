package shared

type GetDevicePoolCompatibilityResult struct {
	CompatibleDevices   []DevicePoolCompatibilityResult `json:"compatibleDevices,omitempty"`
	IncompatibleDevices []DevicePoolCompatibilityResult `json:"incompatibleDevices,omitempty"`
}
