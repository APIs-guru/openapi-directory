package shared

type RuntimeConfiguration struct {
	GameSessionActivationTimeoutSeconds *int64          `json:"GameSessionActivationTimeoutSeconds"`
	MaxConcurrentGameSessionActivations *int64          `json:"MaxConcurrentGameSessionActivations"`
	ServerProcesses                     []ServerProcess `json:"ServerProcesses"`
}
