package shared

type StartDataCollectionByAgentIdsResponse struct {
	AgentsConfigurationStatus []AgentConfigurationStatus `json:"agentsConfigurationStatus"`
}
