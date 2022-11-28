package shared

// BatchGetOnPremisesInstancesOutput
// Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
type BatchGetOnPremisesInstancesOutput struct {
	InstanceInfos []InstanceInfo `json:"instanceInfos,omitempty"`
}
