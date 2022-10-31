package shared




type JobExecutionFailureTypeEnum string

const (
    JobExecutionFailureTypeEnumFailed JobExecutionFailureTypeEnum = "FAILED"
JobExecutionFailureTypeEnumRejected JobExecutionFailureTypeEnum = "REJECTED"
JobExecutionFailureTypeEnumTimedOut JobExecutionFailureTypeEnum = "TIMED_OUT"
JobExecutionFailureTypeEnumAll JobExecutionFailureTypeEnum = "ALL"
)


