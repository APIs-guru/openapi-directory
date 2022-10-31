package shared

type AgentFilter struct {
	AgentHealthCodes []AgentHealthCodeEnum `json:"agentHealthCodes"`
	AgentHealths     []AgentHealthEnum     `json:"agentHealths"`
}
