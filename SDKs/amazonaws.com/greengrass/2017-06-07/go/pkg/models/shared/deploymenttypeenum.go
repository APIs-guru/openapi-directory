package shared

type DeploymentTypeEnum string

const (
	DeploymentTypeEnumNewDeployment        DeploymentTypeEnum = "NewDeployment"
	DeploymentTypeEnumRedeployment         DeploymentTypeEnum = "Redeployment"
	DeploymentTypeEnumResetDeployment      DeploymentTypeEnum = "ResetDeployment"
	DeploymentTypeEnumForceResetDeployment DeploymentTypeEnum = "ForceResetDeployment"
)
