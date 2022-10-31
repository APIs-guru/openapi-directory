package shared

type ExecutionStatusEnum string

const (
	ExecutionStatusEnumPending            ExecutionStatusEnum = "PENDING"
	ExecutionStatusEnumPendingConcurrency ExecutionStatusEnum = "PENDING_CONCURRENCY"
	ExecutionStatusEnumPendingDevice      ExecutionStatusEnum = "PENDING_DEVICE"
	ExecutionStatusEnumProcessing         ExecutionStatusEnum = "PROCESSING"
	ExecutionStatusEnumScheduling         ExecutionStatusEnum = "SCHEDULING"
	ExecutionStatusEnumPreparing          ExecutionStatusEnum = "PREPARING"
	ExecutionStatusEnumRunning            ExecutionStatusEnum = "RUNNING"
	ExecutionStatusEnumCompleted          ExecutionStatusEnum = "COMPLETED"
	ExecutionStatusEnumStopping           ExecutionStatusEnum = "STOPPING"
)
