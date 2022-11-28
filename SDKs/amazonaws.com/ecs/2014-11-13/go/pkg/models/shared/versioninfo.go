package shared

// VersionInfo
// The Docker and Amazon ECS container agent version information about a container instance.
type VersionInfo struct {
	AgentHash     *string `json:"agentHash,omitempty"`
	AgentVersion  *string `json:"agentVersion,omitempty"`
	DockerVersion *string `json:"dockerVersion,omitempty"`
}
