package shared

type StopDataCollectionByAgentIdsResponse struct {
	AgentsConfigurationStatus []AgentConfigurationStatus `json:"agentsConfigurationStatus,omitempty"`
}
