package shared

type MonitoringConfiguration struct {
	CloudWatchMonitoringConfiguration *CloudWatchMonitoringConfiguration `json:"cloudWatchMonitoringConfiguration"`
	PersistentAppUI                   *PersistentAppUIEnum               `json:"persistentAppUI"`
	S3MonitoringConfiguration         *S3MonitoringConfiguration         `json:"s3MonitoringConfiguration"`
}
