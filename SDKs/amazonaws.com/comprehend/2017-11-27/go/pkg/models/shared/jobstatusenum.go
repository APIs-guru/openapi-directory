package shared




type JobStatusEnum string

const (
    JobStatusEnumSubmitted JobStatusEnum = "SUBMITTED"
JobStatusEnumInProgress JobStatusEnum = "IN_PROGRESS"
JobStatusEnumCompleted JobStatusEnum = "COMPLETED"
JobStatusEnumFailed JobStatusEnum = "FAILED"
JobStatusEnumStopRequested JobStatusEnum = "STOP_REQUESTED"
JobStatusEnumStopped JobStatusEnum = "STOPPED"
)


