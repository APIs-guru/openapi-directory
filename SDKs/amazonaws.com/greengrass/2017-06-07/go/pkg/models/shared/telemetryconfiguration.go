package shared

// TelemetryConfiguration
// Configuration settings for running telemetry.
type TelemetryConfiguration struct {
	ConfigurationSyncStatus *ConfigurationSyncStatusEnum `json:"ConfigurationSyncStatus,omitempty"`
	Telemetry               TelemetryEnum                `json:"Telemetry"`
}
