package shared

// AgentFilter
// Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
type AgentFilter struct {
	AgentHealthCodes []AgentHealthCodeEnum `json:"agentHealthCodes"`
	AgentHealths     []AgentHealthEnum     `json:"agentHealths"`
}
