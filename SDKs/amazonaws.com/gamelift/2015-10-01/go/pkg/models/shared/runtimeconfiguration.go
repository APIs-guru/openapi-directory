package shared



type RuntimeConfiguration struct {
    GameSessionActivationTimeoutSeconds *int64 `json:"GameSessionActivationTimeoutSeconds,omitempty"`
    MaxConcurrentGameSessionActivations *int64 `json:"MaxConcurrentGameSessionActivations,omitempty"`
    ServerProcesses []ServerProcess `json:"ServerProcesses,omitempty"`
    
}

