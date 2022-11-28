export var AuditCheckRunStatusEnum;
(function (AuditCheckRunStatusEnum) {
    AuditCheckRunStatusEnum["InProgress"] = "IN_PROGRESS";
    AuditCheckRunStatusEnum["WaitingForDataCollection"] = "WAITING_FOR_DATA_COLLECTION";
    AuditCheckRunStatusEnum["Canceled"] = "CANCELED";
    AuditCheckRunStatusEnum["CompletedCompliant"] = "COMPLETED_COMPLIANT";
    AuditCheckRunStatusEnum["CompletedNonCompliant"] = "COMPLETED_NON_COMPLIANT";
    AuditCheckRunStatusEnum["Failed"] = "FAILED";
})(AuditCheckRunStatusEnum || (AuditCheckRunStatusEnum = {}));
