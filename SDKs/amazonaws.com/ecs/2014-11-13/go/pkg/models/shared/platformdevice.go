package shared

// PlatformDevice
// The devices that are available on the container instance. The only supported device type is a GPU.
type PlatformDevice struct {
	ID   string                 `json:"id"`
	Type PlatformDeviceTypeEnum `json:"type"`
}
