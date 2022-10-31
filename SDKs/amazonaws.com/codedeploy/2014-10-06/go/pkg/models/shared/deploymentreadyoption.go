package shared

type DeploymentReadyOption struct {
	ActionOnTimeout   *DeploymentReadyActionEnum `json:"actionOnTimeout,omitempty"`
	WaitTimeInMinutes *int64                     `json:"waitTimeInMinutes,omitempty"`
}
