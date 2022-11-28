package shared

// AgentConfiguration
//
//	The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data.
type AgentConfiguration struct {
	AgentParameters map[string]string `json:"agentParameters,omitempty"`
	PeriodInSeconds int64             `json:"periodInSeconds"`
	ShouldProfile   bool              `json:"shouldProfile"`
}
