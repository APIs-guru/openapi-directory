package shared

type DeploymentStatusEnum string

const (
	DeploymentStatusEnumCreated    DeploymentStatusEnum = "Created"
	DeploymentStatusEnumQueued     DeploymentStatusEnum = "Queued"
	DeploymentStatusEnumInProgress DeploymentStatusEnum = "InProgress"
	DeploymentStatusEnumBaking     DeploymentStatusEnum = "Baking"
	DeploymentStatusEnumSucceeded  DeploymentStatusEnum = "Succeeded"
	DeploymentStatusEnumFailed     DeploymentStatusEnum = "Failed"
	DeploymentStatusEnumStopped    DeploymentStatusEnum = "Stopped"
	DeploymentStatusEnumReady      DeploymentStatusEnum = "Ready"
)
