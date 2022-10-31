package shared




type StageExecutionStatusEnum string

const (
    StageExecutionStatusEnumCancelled StageExecutionStatusEnum = "Cancelled"
StageExecutionStatusEnumInProgress StageExecutionStatusEnum = "InProgress"
StageExecutionStatusEnumFailed StageExecutionStatusEnum = "Failed"
StageExecutionStatusEnumStopped StageExecutionStatusEnum = "Stopped"
StageExecutionStatusEnumStopping StageExecutionStatusEnum = "Stopping"
StageExecutionStatusEnumSucceeded StageExecutionStatusEnum = "Succeeded"
)


