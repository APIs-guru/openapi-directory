package shared

// TimeoutConfig
// Tunnel timeout configuration.
type TimeoutConfig struct {
	MaxLifetimeTimeoutMinutes *int64 `json:"maxLifetimeTimeoutMinutes,omitempty"`
}
