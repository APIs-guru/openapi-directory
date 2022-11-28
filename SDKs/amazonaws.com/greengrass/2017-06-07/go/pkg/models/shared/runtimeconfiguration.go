package shared

// RuntimeConfiguration
// Runtime configuration for a thing.
type RuntimeConfiguration struct {
	TelemetryConfiguration *TelemetryConfiguration `json:"TelemetryConfiguration,omitempty"`
}
