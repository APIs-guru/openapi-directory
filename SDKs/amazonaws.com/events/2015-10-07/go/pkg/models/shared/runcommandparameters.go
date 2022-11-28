package shared

// RunCommandParameters
// This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.
type RunCommandParameters struct {
	RunCommandTargets []RunCommandTarget `json:"RunCommandTargets"`
}
