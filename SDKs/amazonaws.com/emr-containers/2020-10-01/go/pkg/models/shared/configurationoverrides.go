package shared

// ConfigurationOverrides
// A configuration specification to be used to override existing configurations.
type ConfigurationOverrides struct {
	ApplicationConfiguration []Configuration          `json:"applicationConfiguration,omitempty"`
	MonitoringConfiguration  *MonitoringConfiguration `json:"monitoringConfiguration,omitempty"`
}
