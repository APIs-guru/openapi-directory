package shared

type TaskExecutionStatusEnum string

const (
	TaskExecutionStatusEnumQueued       TaskExecutionStatusEnum = "QUEUED"
	TaskExecutionStatusEnumLaunching    TaskExecutionStatusEnum = "LAUNCHING"
	TaskExecutionStatusEnumPreparing    TaskExecutionStatusEnum = "PREPARING"
	TaskExecutionStatusEnumTransferring TaskExecutionStatusEnum = "TRANSFERRING"
	TaskExecutionStatusEnumVerifying    TaskExecutionStatusEnum = "VERIFYING"
	TaskExecutionStatusEnumSuccess      TaskExecutionStatusEnum = "SUCCESS"
	TaskExecutionStatusEnumError        TaskExecutionStatusEnum = "ERROR"
)
