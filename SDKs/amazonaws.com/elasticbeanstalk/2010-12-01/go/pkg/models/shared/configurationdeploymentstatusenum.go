package shared

type ConfigurationDeploymentStatusEnum string

const (
	ConfigurationDeploymentStatusEnumDeployed ConfigurationDeploymentStatusEnum = "deployed"
	ConfigurationDeploymentStatusEnumPending  ConfigurationDeploymentStatusEnum = "pending"
	ConfigurationDeploymentStatusEnumFailed   ConfigurationDeploymentStatusEnum = "failed"
)
