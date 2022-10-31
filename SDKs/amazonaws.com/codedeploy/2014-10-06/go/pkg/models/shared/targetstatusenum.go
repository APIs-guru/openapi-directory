package shared




type TargetStatusEnum string

const (
    TargetStatusEnumPending TargetStatusEnum = "Pending"
TargetStatusEnumInProgress TargetStatusEnum = "InProgress"
TargetStatusEnumSucceeded TargetStatusEnum = "Succeeded"
TargetStatusEnumFailed TargetStatusEnum = "Failed"
TargetStatusEnumSkipped TargetStatusEnum = "Skipped"
TargetStatusEnumUnknown TargetStatusEnum = "Unknown"
TargetStatusEnumReady TargetStatusEnum = "Ready"
)


