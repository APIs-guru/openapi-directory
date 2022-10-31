package shared




type StatusEnum string

const (
    StatusEnumFailed StatusEnum = "FAILED"
StatusEnumInProgress StatusEnum = "IN_PROGRESS"
StatusEnumPending StatusEnum = "PENDING"
StatusEnumCompleted StatusEnum = "COMPLETED"
StatusEnumUpdatedOptimizing StatusEnum = "UPDATED_OPTIMIZING"
)


