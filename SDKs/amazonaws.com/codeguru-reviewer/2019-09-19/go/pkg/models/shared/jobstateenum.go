package shared




type JobStateEnum string

const (
    JobStateEnumCompleted JobStateEnum = "Completed"
JobStateEnumPending JobStateEnum = "Pending"
JobStateEnumFailed JobStateEnum = "Failed"
JobStateEnumDeleting JobStateEnum = "Deleting"
)


