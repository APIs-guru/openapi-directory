package shared

type ConfigurationOverrides struct {
	ApplicationConfiguration []Configuration          `json:"applicationConfiguration"`
	MonitoringConfiguration  *MonitoringConfiguration `json:"monitoringConfiguration"`
}
