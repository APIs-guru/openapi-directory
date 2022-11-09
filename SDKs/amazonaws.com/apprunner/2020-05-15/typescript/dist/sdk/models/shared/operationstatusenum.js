export var OperationStatusEnum;
(function (OperationStatusEnum) {
    OperationStatusEnum["Pending"] = "PENDING";
    OperationStatusEnum["InProgress"] = "IN_PROGRESS";
    OperationStatusEnum["Failed"] = "FAILED";
    OperationStatusEnum["Succeeded"] = "SUCCEEDED";
    OperationStatusEnum["RollbackInProgress"] = "ROLLBACK_IN_PROGRESS";
    OperationStatusEnum["RollbackFailed"] = "ROLLBACK_FAILED";
    OperationStatusEnum["RollbackSucceeded"] = "ROLLBACK_SUCCEEDED";
})(OperationStatusEnum || (OperationStatusEnum = {}));
