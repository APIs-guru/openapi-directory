package shared




type LogTypeEnum string

const (
    LogTypeEnumAPI LogTypeEnum = "api"
LogTypeEnumAudit LogTypeEnum = "audit"
LogTypeEnumAuthenticator LogTypeEnum = "authenticator"
LogTypeEnumControllerManager LogTypeEnum = "controllerManager"
LogTypeEnumScheduler LogTypeEnum = "scheduler"
)


