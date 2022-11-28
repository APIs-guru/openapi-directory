


export enum BulkEmailStatusEnum {
    Success = "Success",
    MessageRejected = "MessageRejected",
    MailFromDomainNotVerified = "MailFromDomainNotVerified",
    ConfigurationSetDoesNotExist = "ConfigurationSetDoesNotExist",
    TemplateDoesNotExist = "TemplateDoesNotExist",
    AccountSuspended = "AccountSuspended",
    AccountThrottled = "AccountThrottled",
    AccountDailyQuotaExceeded = "AccountDailyQuotaExceeded",
    InvalidSendingPoolName = "InvalidSendingPoolName",
    AccountSendingPaused = "AccountSendingPaused",
    ConfigurationSetSendingPaused = "ConfigurationSetSendingPaused",
    InvalidParameterValue = "InvalidParameterValue",
    TransientFailure = "TransientFailure",
    Failed = "Failed"
}
