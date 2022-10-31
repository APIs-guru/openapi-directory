package shared




type AuditCheckRunStatusEnum string

const (
    AuditCheckRunStatusEnumInProgress AuditCheckRunStatusEnum = "IN_PROGRESS"
AuditCheckRunStatusEnumWaitingForDataCollection AuditCheckRunStatusEnum = "WAITING_FOR_DATA_COLLECTION"
AuditCheckRunStatusEnumCanceled AuditCheckRunStatusEnum = "CANCELED"
AuditCheckRunStatusEnumCompletedCompliant AuditCheckRunStatusEnum = "COMPLETED_COMPLIANT"
AuditCheckRunStatusEnumCompletedNonCompliant AuditCheckRunStatusEnum = "COMPLETED_NON_COMPLIANT"
AuditCheckRunStatusEnumFailed AuditCheckRunStatusEnum = "FAILED"
)


