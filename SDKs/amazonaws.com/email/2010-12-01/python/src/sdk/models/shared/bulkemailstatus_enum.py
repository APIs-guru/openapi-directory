from dataclasses import dataclass, field
from enum import Enum

class BulkEmailStatusEnum(str, Enum):
    SUCCESS = "Success"
    MESSAGE_REJECTED = "MessageRejected"
    MAIL_FROM_DOMAIN_NOT_VERIFIED = "MailFromDomainNotVerified"
    CONFIGURATION_SET_DOES_NOT_EXIST = "ConfigurationSetDoesNotExist"
    TEMPLATE_DOES_NOT_EXIST = "TemplateDoesNotExist"
    ACCOUNT_SUSPENDED = "AccountSuspended"
    ACCOUNT_THROTTLED = "AccountThrottled"
    ACCOUNT_DAILY_QUOTA_EXCEEDED = "AccountDailyQuotaExceeded"
    INVALID_SENDING_POOL_NAME = "InvalidSendingPoolName"
    ACCOUNT_SENDING_PAUSED = "AccountSendingPaused"
    CONFIGURATION_SET_SENDING_PAUSED = "ConfigurationSetSendingPaused"
    INVALID_PARAMETER_VALUE = "InvalidParameterValue"
    TRANSIENT_FAILURE = "TransientFailure"
    FAILED = "Failed"

