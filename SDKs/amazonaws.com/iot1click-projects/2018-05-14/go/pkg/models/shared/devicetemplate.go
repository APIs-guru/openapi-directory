package shared

// DeviceTemplate
// An object representing a device for a placement template (see <a>PlacementTemplate</a>).
type DeviceTemplate struct {
	CallbackOverrides map[string]string `json:"callbackOverrides,omitempty"`
	DeviceType        *string           `json:"deviceType,omitempty"`
}
