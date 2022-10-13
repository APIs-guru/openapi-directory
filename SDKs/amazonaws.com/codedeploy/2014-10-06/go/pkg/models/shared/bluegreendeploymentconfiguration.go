package shared

type BlueGreenDeploymentConfiguration struct {
	DeploymentReadyOption                     *DeploymentReadyOption         `json:"deploymentReadyOption"`
	GreenFleetProvisioningOption              *GreenFleetProvisioningOption  `json:"greenFleetProvisioningOption"`
	TerminateBlueInstancesOnDeploymentSuccess *BlueInstanceTerminationOption `json:"terminateBlueInstancesOnDeploymentSuccess"`
}
