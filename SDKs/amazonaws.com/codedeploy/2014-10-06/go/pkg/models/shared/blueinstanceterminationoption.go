package shared

// BlueInstanceTerminationOption
// Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.
type BlueInstanceTerminationOption struct {
	Action                       *InstanceActionEnum `json:"action,omitempty"`
	TerminationWaitTimeInMinutes *int64              `json:"terminationWaitTimeInMinutes,omitempty"`
}
