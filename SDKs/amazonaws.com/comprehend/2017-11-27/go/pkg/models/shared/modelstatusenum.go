package shared




type ModelStatusEnum string

const (
    ModelStatusEnumSubmitted ModelStatusEnum = "SUBMITTED"
ModelStatusEnumTraining ModelStatusEnum = "TRAINING"
ModelStatusEnumDeleting ModelStatusEnum = "DELETING"
ModelStatusEnumStopRequested ModelStatusEnum = "STOP_REQUESTED"
ModelStatusEnumStopped ModelStatusEnum = "STOPPED"
ModelStatusEnumInError ModelStatusEnum = "IN_ERROR"
ModelStatusEnumTrained ModelStatusEnum = "TRAINED"
)


