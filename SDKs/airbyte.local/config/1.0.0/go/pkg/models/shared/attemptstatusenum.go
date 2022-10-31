package shared




type AttemptStatusEnum string

const (
    AttemptStatusEnumRunning AttemptStatusEnum = "running"
AttemptStatusEnumFailed AttemptStatusEnum = "failed"
AttemptStatusEnumSucceeded AttemptStatusEnum = "succeeded"
)


