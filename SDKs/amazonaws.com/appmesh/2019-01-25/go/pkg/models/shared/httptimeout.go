package shared

// HTTPTimeout
// An object that represents types of timeouts.
type HTTPTimeout struct {
	Idle       *Duration `json:"idle,omitempty"`
	PerRequest *Duration `json:"perRequest,omitempty"`
}
