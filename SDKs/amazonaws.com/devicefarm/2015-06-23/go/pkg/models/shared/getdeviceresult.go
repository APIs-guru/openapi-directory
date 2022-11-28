package shared

// GetDeviceResult
// Represents the result of a get device request.
type GetDeviceResult struct {
	Device *Device `json:"device,omitempty"`
}
