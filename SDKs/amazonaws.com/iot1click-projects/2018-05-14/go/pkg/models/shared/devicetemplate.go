package shared

type DeviceTemplate struct {
	CallbackOverrides map[string]string `json:"callbackOverrides,omitempty"`
	DeviceType        *string           `json:"deviceType,omitempty"`
}
