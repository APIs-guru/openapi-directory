package shared




type BlueprintRunStateEnum string

const (
    BlueprintRunStateEnumRunning BlueprintRunStateEnum = "RUNNING"
BlueprintRunStateEnumSucceeded BlueprintRunStateEnum = "SUCCEEDED"
BlueprintRunStateEnumFailed BlueprintRunStateEnum = "FAILED"
BlueprintRunStateEnumRollingBack BlueprintRunStateEnum = "ROLLING_BACK"
)


