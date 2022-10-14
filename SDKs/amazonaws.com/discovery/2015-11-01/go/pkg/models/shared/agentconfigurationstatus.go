package shared

type AgentConfigurationStatus struct {
	AgentID            *string `json:"agentId,omitempty"`
	Description        *string `json:"description,omitempty"`
	OperationSucceeded *bool   `json:"operationSucceeded,omitempty"`
}
