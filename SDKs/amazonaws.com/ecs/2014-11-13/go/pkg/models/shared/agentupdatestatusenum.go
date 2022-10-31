package shared

type AgentUpdateStatusEnum string

const (
	AgentUpdateStatusEnumPending  AgentUpdateStatusEnum = "PENDING"
	AgentUpdateStatusEnumStaging  AgentUpdateStatusEnum = "STAGING"
	AgentUpdateStatusEnumStaged   AgentUpdateStatusEnum = "STAGED"
	AgentUpdateStatusEnumUpdating AgentUpdateStatusEnum = "UPDATING"
	AgentUpdateStatusEnumUpdated  AgentUpdateStatusEnum = "UPDATED"
	AgentUpdateStatusEnumFailed   AgentUpdateStatusEnum = "FAILED"
)
