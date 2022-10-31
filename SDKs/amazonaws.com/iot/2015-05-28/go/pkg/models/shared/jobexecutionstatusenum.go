package shared




type JobExecutionStatusEnum string

const (
    JobExecutionStatusEnumQueued JobExecutionStatusEnum = "QUEUED"
JobExecutionStatusEnumInProgress JobExecutionStatusEnum = "IN_PROGRESS"
JobExecutionStatusEnumSucceeded JobExecutionStatusEnum = "SUCCEEDED"
JobExecutionStatusEnumFailed JobExecutionStatusEnum = "FAILED"
JobExecutionStatusEnumTimedOut JobExecutionStatusEnum = "TIMED_OUT"
JobExecutionStatusEnumRejected JobExecutionStatusEnum = "REJECTED"
JobExecutionStatusEnumRemoved JobExecutionStatusEnum = "REMOVED"
JobExecutionStatusEnumCanceled JobExecutionStatusEnum = "CANCELED"
)


