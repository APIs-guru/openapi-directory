package shared

type DeploymentReadyOption struct {
	ActionOnTimeout   *DeploymentReadyActionEnum `json:"actionOnTimeout"`
	WaitTimeInMinutes *int64                     `json:"waitTimeInMinutes"`
}
