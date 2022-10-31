package shared




type ServiceStatusEnum string

const (
    ServiceStatusEnumCreateFailed ServiceStatusEnum = "CREATE_FAILED"
ServiceStatusEnumRunning ServiceStatusEnum = "RUNNING"
ServiceStatusEnumDeleted ServiceStatusEnum = "DELETED"
ServiceStatusEnumDeleteFailed ServiceStatusEnum = "DELETE_FAILED"
ServiceStatusEnumPaused ServiceStatusEnum = "PAUSED"
ServiceStatusEnumOperationInProgress ServiceStatusEnum = "OPERATION_IN_PROGRESS"
)


