package shared

// UpdateDeviceStatusRequest
// Represents the request to update the device status.
type UpdateDeviceStatusRequest struct {
	AccessToken            string                          `json:"AccessToken"`
	DeviceKey              string                          `json:"DeviceKey"`
	DeviceRememberedStatus *DeviceRememberedStatusTypeEnum `json:"DeviceRememberedStatus,omitempty"`
}
