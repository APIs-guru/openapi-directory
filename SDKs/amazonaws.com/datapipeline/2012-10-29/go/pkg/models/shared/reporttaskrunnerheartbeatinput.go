package shared



type ReportTaskRunnerHeartbeatInput struct {
    Hostname *string `json:"hostname,omitempty"`
    TaskrunnerID string `json:"taskrunnerId"`
    WorkerGroup *string `json:"workerGroup,omitempty"`
    
}

