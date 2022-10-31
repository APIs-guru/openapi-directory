package shared




type UserStatusTypeEnum string

const (
    UserStatusTypeEnumUnconfirmed UserStatusTypeEnum = "UNCONFIRMED"
UserStatusTypeEnumConfirmed UserStatusTypeEnum = "CONFIRMED"
UserStatusTypeEnumArchived UserStatusTypeEnum = "ARCHIVED"
UserStatusTypeEnumCompromised UserStatusTypeEnum = "COMPROMISED"
UserStatusTypeEnumUnknown UserStatusTypeEnum = "UNKNOWN"
UserStatusTypeEnumResetRequired UserStatusTypeEnum = "RESET_REQUIRED"
UserStatusTypeEnumForceChangePassword UserStatusTypeEnum = "FORCE_CHANGE_PASSWORD"
)


