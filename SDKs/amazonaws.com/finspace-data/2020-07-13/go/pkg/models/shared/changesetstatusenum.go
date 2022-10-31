package shared




type ChangesetStatusEnum string

const (
    ChangesetStatusEnumPending ChangesetStatusEnum = "PENDING"
ChangesetStatusEnumFailed ChangesetStatusEnum = "FAILED"
ChangesetStatusEnumSuccess ChangesetStatusEnum = "SUCCESS"
ChangesetStatusEnumRunning ChangesetStatusEnum = "RUNNING"
ChangesetStatusEnumStopRequested ChangesetStatusEnum = "STOP_REQUESTED"
)


