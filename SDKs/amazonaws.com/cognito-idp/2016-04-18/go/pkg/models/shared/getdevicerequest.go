package shared

type GetDeviceRequest struct {
	AccessToken *string `json:"AccessToken"`
	DeviceKey   string  `json:"DeviceKey"`
}
