package shared



type VersionInfo struct {
    AgentHash *string `json:"agentHash,omitempty"`
    AgentVersion *string `json:"agentVersion,omitempty"`
    DockerVersion *string `json:"dockerVersion,omitempty"`
    
}

