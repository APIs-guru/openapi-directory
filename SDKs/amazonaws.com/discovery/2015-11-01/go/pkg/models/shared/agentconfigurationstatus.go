package shared

// AgentConfigurationStatus
// Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.
type AgentConfigurationStatus struct {
	AgentID            *string `json:"agentId,omitempty"`
	Description        *string `json:"description,omitempty"`
	OperationSucceeded *bool   `json:"operationSucceeded,omitempty"`
}
