package shared




type BulkDeploymentStatusEnum string

const (
    BulkDeploymentStatusEnumInitializing BulkDeploymentStatusEnum = "Initializing"
BulkDeploymentStatusEnumRunning BulkDeploymentStatusEnum = "Running"
BulkDeploymentStatusEnumCompleted BulkDeploymentStatusEnum = "Completed"
BulkDeploymentStatusEnumStopping BulkDeploymentStatusEnum = "Stopping"
BulkDeploymentStatusEnumStopped BulkDeploymentStatusEnum = "Stopped"
BulkDeploymentStatusEnumFailed BulkDeploymentStatusEnum = "Failed"
)


