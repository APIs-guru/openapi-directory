package shared

type BulkEmailStatusEnum string

const (
	BulkEmailStatusEnumSuccess                       BulkEmailStatusEnum = "Success"
	BulkEmailStatusEnumMessageRejected               BulkEmailStatusEnum = "MessageRejected"
	BulkEmailStatusEnumMailFromDomainNotVerified     BulkEmailStatusEnum = "MailFromDomainNotVerified"
	BulkEmailStatusEnumConfigurationSetDoesNotExist  BulkEmailStatusEnum = "ConfigurationSetDoesNotExist"
	BulkEmailStatusEnumTemplateDoesNotExist          BulkEmailStatusEnum = "TemplateDoesNotExist"
	BulkEmailStatusEnumAccountSuspended              BulkEmailStatusEnum = "AccountSuspended"
	BulkEmailStatusEnumAccountThrottled              BulkEmailStatusEnum = "AccountThrottled"
	BulkEmailStatusEnumAccountDailyQuotaExceeded     BulkEmailStatusEnum = "AccountDailyQuotaExceeded"
	BulkEmailStatusEnumInvalidSendingPoolName        BulkEmailStatusEnum = "InvalidSendingPoolName"
	BulkEmailStatusEnumAccountSendingPaused          BulkEmailStatusEnum = "AccountSendingPaused"
	BulkEmailStatusEnumConfigurationSetSendingPaused BulkEmailStatusEnum = "ConfigurationSetSendingPaused"
	BulkEmailStatusEnumInvalidParameterValue         BulkEmailStatusEnum = "InvalidParameterValue"
	BulkEmailStatusEnumTransientFailure              BulkEmailStatusEnum = "TransientFailure"
	BulkEmailStatusEnumFailed                        BulkEmailStatusEnum = "Failed"
)
