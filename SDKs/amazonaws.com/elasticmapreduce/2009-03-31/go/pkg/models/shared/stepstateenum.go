package shared




type StepStateEnum string

const (
    StepStateEnumPending StepStateEnum = "PENDING"
StepStateEnumCancelPending StepStateEnum = "CANCEL_PENDING"
StepStateEnumRunning StepStateEnum = "RUNNING"
StepStateEnumCompleted StepStateEnum = "COMPLETED"
StepStateEnumCancelled StepStateEnum = "CANCELLED"
StepStateEnumFailed StepStateEnum = "FAILED"
StepStateEnumInterrupted StepStateEnum = "INTERRUPTED"
)


