package shared

// RemoveTagsFromOnPremisesInstancesInput
// Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
type RemoveTagsFromOnPremisesInstancesInput struct {
	InstanceNames []string `json:"instanceNames"`
	Tags          []Tag    `json:"tags"`
}
