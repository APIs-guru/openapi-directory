package shared

type DeploymentStatusEnum string

const (
	DeploymentStatusEnumActive    DeploymentStatusEnum = "ACTIVE"
	DeploymentStatusEnumCompleted DeploymentStatusEnum = "COMPLETED"
	DeploymentStatusEnumCanceled  DeploymentStatusEnum = "CANCELED"
	DeploymentStatusEnumFailed    DeploymentStatusEnum = "FAILED"
	DeploymentStatusEnumInactive  DeploymentStatusEnum = "INACTIVE"
)
