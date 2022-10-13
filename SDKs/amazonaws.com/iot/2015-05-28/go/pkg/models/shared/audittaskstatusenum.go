package shared

type AuditTaskStatusEnum string

const (
	AuditTaskStatusEnumInProgress AuditTaskStatusEnum = "IN_PROGRESS"
	AuditTaskStatusEnumCompleted  AuditTaskStatusEnum = "COMPLETED"
	AuditTaskStatusEnumFailed     AuditTaskStatusEnum = "FAILED"
	AuditTaskStatusEnumCanceled   AuditTaskStatusEnum = "CANCELED"
)
