package shared

// ManagedAgentStateChange
// An object representing a change in state for a managed agent.
type ManagedAgentStateChange struct {
	ContainerName    string               `json:"containerName"`
	ManagedAgentName ManagedAgentNameEnum `json:"managedAgentName"`
	Reason           *string              `json:"reason,omitempty"`
	Status           string               `json:"status"`
}
