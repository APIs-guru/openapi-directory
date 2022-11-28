package shared

// S3MonitoringConfiguration
//
//	Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
type S3MonitoringConfiguration struct {
	LogURI string `json:"logUri"`
}
