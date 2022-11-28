package shared

// UpdateDeploymentGroupOutput
// Represents the output of an <code>UpdateDeploymentGroup</code> operation.
type UpdateDeploymentGroupOutput struct {
	HooksNotCleanedUp []AutoScalingGroup `json:"hooksNotCleanedUp,omitempty"`
}
