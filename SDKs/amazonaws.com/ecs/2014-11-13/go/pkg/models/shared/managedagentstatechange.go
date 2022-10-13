package shared

type ManagedAgentStateChange struct {
	ContainerName    string               `json:"containerName"`
	ManagedAgentName ManagedAgentNameEnum `json:"managedAgentName"`
	Reason           *string              `json:"reason"`
	Status           string               `json:"status"`
}
