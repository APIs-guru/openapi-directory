package shared




type AgentHealthCodeEnum string

const (
    AgentHealthCodeEnumIdle AgentHealthCodeEnum = "IDLE"
AgentHealthCodeEnumRunning AgentHealthCodeEnum = "RUNNING"
AgentHealthCodeEnumShutdown AgentHealthCodeEnum = "SHUTDOWN"
AgentHealthCodeEnumUnhealthy AgentHealthCodeEnum = "UNHEALTHY"
AgentHealthCodeEnumThrottled AgentHealthCodeEnum = "THROTTLED"
AgentHealthCodeEnumUnknown AgentHealthCodeEnum = "UNKNOWN"
)


