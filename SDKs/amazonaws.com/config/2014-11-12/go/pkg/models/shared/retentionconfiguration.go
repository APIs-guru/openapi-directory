package shared

// RetentionConfiguration
// An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
type RetentionConfiguration struct {
	Name                  string `json:"Name"`
	RetentionPeriodInDays int64  `json:"RetentionPeriodInDays"`
}
