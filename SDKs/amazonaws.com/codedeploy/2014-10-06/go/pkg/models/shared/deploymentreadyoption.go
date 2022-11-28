package shared

// DeploymentReadyOption
// Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
type DeploymentReadyOption struct {
	ActionOnTimeout   *DeploymentReadyActionEnum `json:"actionOnTimeout,omitempty"`
	WaitTimeInMinutes *int64                     `json:"waitTimeInMinutes,omitempty"`
}
