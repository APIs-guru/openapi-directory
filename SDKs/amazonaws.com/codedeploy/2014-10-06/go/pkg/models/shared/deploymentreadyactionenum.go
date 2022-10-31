package shared

type DeploymentReadyActionEnum string

const (
	DeploymentReadyActionEnumContinueDeployment DeploymentReadyActionEnum = "CONTINUE_DEPLOYMENT"
	DeploymentReadyActionEnumStopDeployment     DeploymentReadyActionEnum = "STOP_DEPLOYMENT"
)
