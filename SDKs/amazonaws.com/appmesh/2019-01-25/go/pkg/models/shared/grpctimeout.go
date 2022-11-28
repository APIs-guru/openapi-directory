package shared

// GrpcTimeout
// An object that represents types of timeouts.
type GrpcTimeout struct {
	Idle       *Duration `json:"idle,omitempty"`
	PerRequest *Duration `json:"perRequest,omitempty"`
}
