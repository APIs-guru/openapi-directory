package shared

// BatchGetOnPremisesInstancesInput
// Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
type BatchGetOnPremisesInstancesInput struct {
	InstanceNames []string `json:"instanceNames"`
}
