package shared

// ForgetDeviceRequest
// Represents the request to forget the device.
type ForgetDeviceRequest struct {
	AccessToken *string `json:"AccessToken,omitempty"`
	DeviceKey   string  `json:"DeviceKey"`
}
