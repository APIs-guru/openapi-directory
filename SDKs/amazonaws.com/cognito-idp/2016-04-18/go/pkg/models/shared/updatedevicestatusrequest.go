package shared

type UpdateDeviceStatusRequest struct {
	AccessToken            string                          `json:"AccessToken"`
	DeviceKey              string                          `json:"DeviceKey"`
	DeviceRememberedStatus *DeviceRememberedStatusTypeEnum `json:"DeviceRememberedStatus"`
}
