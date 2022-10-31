package shared




type TaskStatusTypeEnum string

const (
    TaskStatusTypeEnumStarting TaskStatusTypeEnum = "STARTING"
TaskStatusTypeEnumRunning TaskStatusTypeEnum = "RUNNING"
TaskStatusTypeEnumStopping TaskStatusTypeEnum = "STOPPING"
TaskStatusTypeEnumStopped TaskStatusTypeEnum = "STOPPED"
TaskStatusTypeEnumSucceeded TaskStatusTypeEnum = "SUCCEEDED"
TaskStatusTypeEnumFailed TaskStatusTypeEnum = "FAILED"
TaskStatusTypeEnumTimeout TaskStatusTypeEnum = "TIMEOUT"
)


