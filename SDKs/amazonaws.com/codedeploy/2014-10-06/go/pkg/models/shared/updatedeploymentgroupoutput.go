package shared

type UpdateDeploymentGroupOutput struct {
	HooksNotCleanedUp []AutoScalingGroup `json:"hooksNotCleanedUp"`
}
