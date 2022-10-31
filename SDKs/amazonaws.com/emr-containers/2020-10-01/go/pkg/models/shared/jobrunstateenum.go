package shared




type JobRunStateEnum string

const (
    JobRunStateEnumPending JobRunStateEnum = "PENDING"
JobRunStateEnumSubmitted JobRunStateEnum = "SUBMITTED"
JobRunStateEnumRunning JobRunStateEnum = "RUNNING"
JobRunStateEnumFailed JobRunStateEnum = "FAILED"
JobRunStateEnumCancelled JobRunStateEnum = "CANCELLED"
JobRunStateEnumCancelPending JobRunStateEnum = "CANCEL_PENDING"
JobRunStateEnumCompleted JobRunStateEnum = "COMPLETED"
)


