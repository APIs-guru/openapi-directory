package shared

type ExperimentActionStatusEnum string

const (
	ExperimentActionStatusEnumPending    ExperimentActionStatusEnum = "pending"
	ExperimentActionStatusEnumInitiating ExperimentActionStatusEnum = "initiating"
	ExperimentActionStatusEnumRunning    ExperimentActionStatusEnum = "running"
	ExperimentActionStatusEnumCompleted  ExperimentActionStatusEnum = "completed"
	ExperimentActionStatusEnumCancelled  ExperimentActionStatusEnum = "cancelled"
	ExperimentActionStatusEnumStopping   ExperimentActionStatusEnum = "stopping"
	ExperimentActionStatusEnumStopped    ExperimentActionStatusEnum = "stopped"
	ExperimentActionStatusEnumFailed     ExperimentActionStatusEnum = "failed"
)
