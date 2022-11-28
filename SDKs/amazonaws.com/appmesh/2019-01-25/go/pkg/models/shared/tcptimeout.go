package shared

// TCPTimeout
// An object that represents types of timeouts.
type TCPTimeout struct {
	Idle *Duration `json:"idle,omitempty"`
}
