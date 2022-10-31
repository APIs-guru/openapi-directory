package shared




type ActionStatusEnum string

const (
    ActionStatusEnumStandby ActionStatusEnum = "STANDBY"
ActionStatusEnumPending ActionStatusEnum = "PENDING"
ActionStatusEnumExecutionInProgress ActionStatusEnum = "EXECUTION_IN_PROGRESS"
ActionStatusEnumExecutionSuccess ActionStatusEnum = "EXECUTION_SUCCESS"
ActionStatusEnumExecutionFailure ActionStatusEnum = "EXECUTION_FAILURE"
ActionStatusEnumReverseInProgress ActionStatusEnum = "REVERSE_IN_PROGRESS"
ActionStatusEnumReverseSuccess ActionStatusEnum = "REVERSE_SUCCESS"
ActionStatusEnumReverseFailure ActionStatusEnum = "REVERSE_FAILURE"
ActionStatusEnumResetInProgress ActionStatusEnum = "RESET_IN_PROGRESS"
ActionStatusEnumResetFailure ActionStatusEnum = "RESET_FAILURE"
)


