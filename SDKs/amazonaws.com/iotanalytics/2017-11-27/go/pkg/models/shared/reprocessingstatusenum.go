package shared




type ReprocessingStatusEnum string

const (
    ReprocessingStatusEnumRunning ReprocessingStatusEnum = "RUNNING"
ReprocessingStatusEnumSucceeded ReprocessingStatusEnum = "SUCCEEDED"
ReprocessingStatusEnumCancelled ReprocessingStatusEnum = "CANCELLED"
ReprocessingStatusEnumFailed ReprocessingStatusEnum = "FAILED"
)


