package shared

// ReportTaskRunnerHeartbeatInput
// Contains the parameters for ReportTaskRunnerHeartbeat.
type ReportTaskRunnerHeartbeatInput struct {
	Hostname     *string `json:"hostname,omitempty"`
	TaskrunnerID string  `json:"taskrunnerId"`
	WorkerGroup  *string `json:"workerGroup,omitempty"`
}
