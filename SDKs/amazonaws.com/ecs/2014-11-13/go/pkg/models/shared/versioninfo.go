package shared

type VersionInfo struct {
	AgentHash     *string `json:"agentHash"`
	AgentVersion  *string `json:"agentVersion"`
	DockerVersion *string `json:"dockerVersion"`
}
