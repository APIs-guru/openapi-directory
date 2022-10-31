package shared




type ReplayStateEnum string

const (
    ReplayStateEnumStarting ReplayStateEnum = "STARTING"
ReplayStateEnumRunning ReplayStateEnum = "RUNNING"
ReplayStateEnumCancelling ReplayStateEnum = "CANCELLING"
ReplayStateEnumCompleted ReplayStateEnum = "COMPLETED"
ReplayStateEnumCancelled ReplayStateEnum = "CANCELLED"
ReplayStateEnumFailed ReplayStateEnum = "FAILED"
)


