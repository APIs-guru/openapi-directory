package shared




type JobStatusEnum string

const (
    JobStatusEnumSubmitted JobStatusEnum = "SUBMITTED"
JobStatusEnumInProgress JobStatusEnum = "IN_PROGRESS"
JobStatusEnumCompleted JobStatusEnum = "COMPLETED"
JobStatusEnumPartialSuccess JobStatusEnum = "PARTIAL_SUCCESS"
JobStatusEnumFailed JobStatusEnum = "FAILED"
JobStatusEnumStopRequested JobStatusEnum = "STOP_REQUESTED"
JobStatusEnumStopped JobStatusEnum = "STOPPED"
)


