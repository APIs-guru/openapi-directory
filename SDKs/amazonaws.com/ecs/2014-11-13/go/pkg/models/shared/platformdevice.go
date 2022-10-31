package shared

type PlatformDevice struct {
	ID   string                 `json:"id"`
	Type PlatformDeviceTypeEnum `json:"type"`
}
