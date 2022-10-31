package shared

type AuditMitigationActionsTaskStatusEnum string

const (
	AuditMitigationActionsTaskStatusEnumInProgress AuditMitigationActionsTaskStatusEnum = "IN_PROGRESS"
	AuditMitigationActionsTaskStatusEnumCompleted  AuditMitigationActionsTaskStatusEnum = "COMPLETED"
	AuditMitigationActionsTaskStatusEnumFailed     AuditMitigationActionsTaskStatusEnum = "FAILED"
	AuditMitigationActionsTaskStatusEnumCanceled   AuditMitigationActionsTaskStatusEnum = "CANCELED"
)
