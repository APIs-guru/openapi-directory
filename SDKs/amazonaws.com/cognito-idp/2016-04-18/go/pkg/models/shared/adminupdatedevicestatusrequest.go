package shared

type AdminUpdateDeviceStatusRequest struct {
	DeviceKey              string                          `json:"DeviceKey"`
	DeviceRememberedStatus *DeviceRememberedStatusTypeEnum `json:"DeviceRememberedStatus"`
	UserPoolID             string                          `json:"UserPoolId"`
	Username               string                          `json:"Username"`
}
