package shared

type AgentConfigurationStatus struct {
	AgentID            *string `json:"agentId"`
	Description        *string `json:"description"`
	OperationSucceeded *bool   `json:"operationSucceeded"`
}
