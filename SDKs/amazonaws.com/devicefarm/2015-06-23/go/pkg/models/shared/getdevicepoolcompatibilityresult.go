package shared

type GetDevicePoolCompatibilityResult struct {
	CompatibleDevices   []DevicePoolCompatibilityResult `json:"compatibleDevices"`
	IncompatibleDevices []DevicePoolCompatibilityResult `json:"incompatibleDevices"`
}
