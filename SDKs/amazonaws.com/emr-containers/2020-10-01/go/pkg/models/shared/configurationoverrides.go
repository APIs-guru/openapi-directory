package shared



type ConfigurationOverrides struct {
    ApplicationConfiguration []Configuration `json:"applicationConfiguration,omitempty"`
    MonitoringConfiguration *MonitoringConfiguration `json:"monitoringConfiguration,omitempty"`
    
}

