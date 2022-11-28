package shared

// GetDeviceRequest
// Represents the request to get the device.
type GetDeviceRequest struct {
	AccessToken *string `json:"AccessToken,omitempty"`
	DeviceKey   string  `json:"DeviceKey"`
}
