package shared

type AgentStatusEnum string

const (
	AgentStatusEnumHealthy     AgentStatusEnum = "HEALTHY"
	AgentStatusEnumUnhealthy   AgentStatusEnum = "UNHEALTHY"
	AgentStatusEnumRunning     AgentStatusEnum = "RUNNING"
	AgentStatusEnumUnknown     AgentStatusEnum = "UNKNOWN"
	AgentStatusEnumBlacklisted AgentStatusEnum = "BLACKLISTED"
	AgentStatusEnumShutdown    AgentStatusEnum = "SHUTDOWN"
)
