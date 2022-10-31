package shared




type AutoRollbackEventEnum string

const (
    AutoRollbackEventEnumDeploymentFailure AutoRollbackEventEnum = "DEPLOYMENT_FAILURE"
AutoRollbackEventEnumDeploymentStopOnAlarm AutoRollbackEventEnum = "DEPLOYMENT_STOP_ON_ALARM"
AutoRollbackEventEnumDeploymentStopOnRequest AutoRollbackEventEnum = "DEPLOYMENT_STOP_ON_REQUEST"
)


