package shared

type DeviceTemplate struct {
	CallbackOverrides map[string]string `json:"callbackOverrides"`
	DeviceType        *string           `json:"deviceType"`
}
