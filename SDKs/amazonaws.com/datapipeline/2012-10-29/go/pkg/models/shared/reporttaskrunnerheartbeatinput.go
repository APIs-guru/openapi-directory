package shared

type ReportTaskRunnerHeartbeatInput struct {
	Hostname     *string `json:"hostname"`
	TaskrunnerID string  `json:"taskrunnerId"`
	WorkerGroup  *string `json:"workerGroup"`
}
