package shared

// PendingCloudwatchLogsExports
// A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
type PendingCloudwatchLogsExports struct {
	LogTypesToDisable []string
	LogTypesToEnable  []string
}
