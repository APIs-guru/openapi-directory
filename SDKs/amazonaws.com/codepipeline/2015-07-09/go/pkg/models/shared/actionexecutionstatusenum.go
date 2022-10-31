package shared




type ActionExecutionStatusEnum string

const (
    ActionExecutionStatusEnumInProgress ActionExecutionStatusEnum = "InProgress"
ActionExecutionStatusEnumAbandoned ActionExecutionStatusEnum = "Abandoned"
ActionExecutionStatusEnumSucceeded ActionExecutionStatusEnum = "Succeeded"
ActionExecutionStatusEnumFailed ActionExecutionStatusEnum = "Failed"
)


