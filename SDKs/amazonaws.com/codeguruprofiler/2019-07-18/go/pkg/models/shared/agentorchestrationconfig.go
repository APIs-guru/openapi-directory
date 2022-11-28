package shared

// AgentOrchestrationConfig
//
//	Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
type AgentOrchestrationConfig struct {
	ProfilingEnabled bool `json:"profilingEnabled"`
}
