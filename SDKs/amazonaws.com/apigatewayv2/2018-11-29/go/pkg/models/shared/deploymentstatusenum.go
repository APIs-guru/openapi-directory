package shared

type DeploymentStatusEnum string

const (
	DeploymentStatusEnumPending  DeploymentStatusEnum = "PENDING"
	DeploymentStatusEnumFailed   DeploymentStatusEnum = "FAILED"
	DeploymentStatusEnumDeployed DeploymentStatusEnum = "DEPLOYED"
)
