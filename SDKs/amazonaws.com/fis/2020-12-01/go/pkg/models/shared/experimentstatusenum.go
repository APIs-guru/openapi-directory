package shared




type ExperimentStatusEnum string

const (
    ExperimentStatusEnumPending ExperimentStatusEnum = "pending"
ExperimentStatusEnumInitiating ExperimentStatusEnum = "initiating"
ExperimentStatusEnumRunning ExperimentStatusEnum = "running"
ExperimentStatusEnumCompleted ExperimentStatusEnum = "completed"
ExperimentStatusEnumStopping ExperimentStatusEnum = "stopping"
ExperimentStatusEnumStopped ExperimentStatusEnum = "stopped"
ExperimentStatusEnumFailed ExperimentStatusEnum = "failed"
)


