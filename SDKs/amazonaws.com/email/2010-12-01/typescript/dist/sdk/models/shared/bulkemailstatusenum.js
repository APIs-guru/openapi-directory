export var BulkEmailStatusEnum;
(function (BulkEmailStatusEnum) {
    BulkEmailStatusEnum["Success"] = "Success";
    BulkEmailStatusEnum["MessageRejected"] = "MessageRejected";
    BulkEmailStatusEnum["MailFromDomainNotVerified"] = "MailFromDomainNotVerified";
    BulkEmailStatusEnum["ConfigurationSetDoesNotExist"] = "ConfigurationSetDoesNotExist";
    BulkEmailStatusEnum["TemplateDoesNotExist"] = "TemplateDoesNotExist";
    BulkEmailStatusEnum["AccountSuspended"] = "AccountSuspended";
    BulkEmailStatusEnum["AccountThrottled"] = "AccountThrottled";
    BulkEmailStatusEnum["AccountDailyQuotaExceeded"] = "AccountDailyQuotaExceeded";
    BulkEmailStatusEnum["InvalidSendingPoolName"] = "InvalidSendingPoolName";
    BulkEmailStatusEnum["AccountSendingPaused"] = "AccountSendingPaused";
    BulkEmailStatusEnum["ConfigurationSetSendingPaused"] = "ConfigurationSetSendingPaused";
    BulkEmailStatusEnum["InvalidParameterValue"] = "InvalidParameterValue";
    BulkEmailStatusEnum["TransientFailure"] = "TransientFailure";
    BulkEmailStatusEnum["Failed"] = "Failed";
})(BulkEmailStatusEnum || (BulkEmailStatusEnum = {}));
