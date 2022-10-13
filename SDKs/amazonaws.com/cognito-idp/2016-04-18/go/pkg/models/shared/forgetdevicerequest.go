package shared

type ForgetDeviceRequest struct {
	AccessToken *string `json:"AccessToken"`
	DeviceKey   string  `json:"DeviceKey"`
}
