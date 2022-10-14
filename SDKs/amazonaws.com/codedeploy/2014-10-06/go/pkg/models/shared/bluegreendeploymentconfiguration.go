package shared

type BlueGreenDeploymentConfiguration struct {
	DeploymentReadyOption                     *DeploymentReadyOption         `json:"deploymentReadyOption,omitempty"`
	GreenFleetProvisioningOption              *GreenFleetProvisioningOption  `json:"greenFleetProvisioningOption,omitempty"`
	TerminateBlueInstancesOnDeploymentSuccess *BlueInstanceTerminationOption `json:"terminateBlueInstancesOnDeploymentSuccess,omitempty"`
}
