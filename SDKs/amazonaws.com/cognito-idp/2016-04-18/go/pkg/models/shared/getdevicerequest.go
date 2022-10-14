package shared

type GetDeviceRequest struct {
	AccessToken *string `json:"AccessToken,omitempty"`
	DeviceKey   string  `json:"DeviceKey"`
}
