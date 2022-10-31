package shared




type OperationStatusEnum string

const (
    OperationStatusEnumPending OperationStatusEnum = "PENDING"
OperationStatusEnumInProgress OperationStatusEnum = "IN_PROGRESS"
OperationStatusEnumFailed OperationStatusEnum = "FAILED"
OperationStatusEnumSucceeded OperationStatusEnum = "SUCCEEDED"
OperationStatusEnumRollbackInProgress OperationStatusEnum = "ROLLBACK_IN_PROGRESS"
OperationStatusEnumRollbackFailed OperationStatusEnum = "ROLLBACK_FAILED"
OperationStatusEnumRollbackSucceeded OperationStatusEnum = "ROLLBACK_SUCCEEDED"
)


