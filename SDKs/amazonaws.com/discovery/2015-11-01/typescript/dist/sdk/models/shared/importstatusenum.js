export var ImportStatusEnum;
(function (ImportStatusEnum) {
    ImportStatusEnum["ImportInProgress"] = "IMPORT_IN_PROGRESS";
    ImportStatusEnum["ImportComplete"] = "IMPORT_COMPLETE";
    ImportStatusEnum["ImportCompleteWithErrors"] = "IMPORT_COMPLETE_WITH_ERRORS";
    ImportStatusEnum["ImportFailed"] = "IMPORT_FAILED";
    ImportStatusEnum["ImportFailedServerLimitExceeded"] = "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED";
    ImportStatusEnum["ImportFailedRecordLimitExceeded"] = "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED";
    ImportStatusEnum["DeleteInProgress"] = "DELETE_IN_PROGRESS";
    ImportStatusEnum["DeleteComplete"] = "DELETE_COMPLETE";
    ImportStatusEnum["DeleteFailed"] = "DELETE_FAILED";
    ImportStatusEnum["DeleteFailedLimitExceeded"] = "DELETE_FAILED_LIMIT_EXCEEDED";
    ImportStatusEnum["InternalError"] = "INTERNAL_ERROR";
})(ImportStatusEnum || (ImportStatusEnum = {}));
