package shared




type EnvironmentStatusEnum string

const (
    EnvironmentStatusEnumError EnvironmentStatusEnum = "error"
EnvironmentStatusEnumCreating EnvironmentStatusEnum = "creating"
EnvironmentStatusEnumConnecting EnvironmentStatusEnum = "connecting"
EnvironmentStatusEnumReady EnvironmentStatusEnum = "ready"
EnvironmentStatusEnumStopping EnvironmentStatusEnum = "stopping"
EnvironmentStatusEnumStopped EnvironmentStatusEnum = "stopped"
EnvironmentStatusEnumDeleting EnvironmentStatusEnum = "deleting"
)


