package shared




type RemediationExecutionStateEnum string

const (
    RemediationExecutionStateEnumQueued RemediationExecutionStateEnum = "QUEUED"
RemediationExecutionStateEnumInProgress RemediationExecutionStateEnum = "IN_PROGRESS"
RemediationExecutionStateEnumSucceeded RemediationExecutionStateEnum = "SUCCEEDED"
RemediationExecutionStateEnumFailed RemediationExecutionStateEnum = "FAILED"
)


