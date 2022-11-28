package shared

// AdminForgetDeviceRequest
// Sends the forgot device request, as an administrator.
type AdminForgetDeviceRequest struct {
	DeviceKey  string `json:"DeviceKey"`
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
