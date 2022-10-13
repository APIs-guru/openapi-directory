package shared

type TelemetryConfiguration struct {
	ConfigurationSyncStatus *ConfigurationSyncStatusEnum `json:"ConfigurationSyncStatus"`
	Telemetry               TelemetryEnum                `json:"Telemetry"`
}
