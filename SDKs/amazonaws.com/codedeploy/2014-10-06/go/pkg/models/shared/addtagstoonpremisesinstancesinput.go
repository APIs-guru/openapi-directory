package shared

// AddTagsToOnPremisesInstancesInput
// Represents the input of, and adds tags to, an on-premises instance operation.
type AddTagsToOnPremisesInstancesInput struct {
	InstanceNames []string `json:"instanceNames"`
	Tags          []Tag    `json:"tags"`
}
