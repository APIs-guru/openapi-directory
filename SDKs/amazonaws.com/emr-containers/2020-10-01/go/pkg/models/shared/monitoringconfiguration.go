package shared

// MonitoringConfiguration
// Configuration setting for monitoring.
type MonitoringConfiguration struct {
	CloudWatchMonitoringConfiguration *CloudWatchMonitoringConfiguration `json:"cloudWatchMonitoringConfiguration,omitempty"`
	PersistentAppUI                   *PersistentAppUIEnum               `json:"persistentAppUI,omitempty"`
	S3MonitoringConfiguration         *S3MonitoringConfiguration         `json:"s3MonitoringConfiguration,omitempty"`
}
