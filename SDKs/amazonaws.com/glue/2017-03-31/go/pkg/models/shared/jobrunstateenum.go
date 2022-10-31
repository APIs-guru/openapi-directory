package shared




type JobRunStateEnum string

const (
    JobRunStateEnumStarting JobRunStateEnum = "STARTING"
JobRunStateEnumRunning JobRunStateEnum = "RUNNING"
JobRunStateEnumStopping JobRunStateEnum = "STOPPING"
JobRunStateEnumStopped JobRunStateEnum = "STOPPED"
JobRunStateEnumSucceeded JobRunStateEnum = "SUCCEEDED"
JobRunStateEnumFailed JobRunStateEnum = "FAILED"
JobRunStateEnumTimeout JobRunStateEnum = "TIMEOUT"
)


