package shared

type AdminGetDeviceRequest struct {
	DeviceKey  string `json:"DeviceKey"`
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
