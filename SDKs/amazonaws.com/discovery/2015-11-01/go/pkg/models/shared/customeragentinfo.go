package shared

type CustomerAgentInfo struct {
	ActiveAgents      int64 `json:"activeAgents"`
	BlackListedAgents int64 `json:"blackListedAgents"`
	HealthyAgents     int64 `json:"healthyAgents"`
	ShutdownAgents    int64 `json:"shutdownAgents"`
	TotalAgents       int64 `json:"totalAgents"`
	UnhealthyAgents   int64 `json:"unhealthyAgents"`
	UnknownAgents     int64 `json:"unknownAgents"`
}
