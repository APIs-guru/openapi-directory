package shared

type AgentConfiguration struct {
	AgentParameters map[string]string `json:"agentParameters,omitempty"`
	PeriodInSeconds int64             `json:"periodInSeconds"`
	ShouldProfile   bool              `json:"shouldProfile"`
}
