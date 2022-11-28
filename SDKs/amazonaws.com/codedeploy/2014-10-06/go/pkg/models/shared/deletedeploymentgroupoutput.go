package shared

// DeleteDeploymentGroupOutput
// Represents the output of a <code>DeleteDeploymentGroup</code> operation.
type DeleteDeploymentGroupOutput struct {
	HooksNotCleanedUp []AutoScalingGroup `json:"hooksNotCleanedUp,omitempty"`
}
