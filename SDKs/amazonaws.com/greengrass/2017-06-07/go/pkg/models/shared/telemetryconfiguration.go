package shared



type TelemetryConfiguration struct {
    ConfigurationSyncStatus *ConfigurationSyncStatusEnum `json:"ConfigurationSyncStatus,omitempty"`
    Telemetry TelemetryEnum `json:"Telemetry"`
    
}

