package shared

// UpdateCloudFormationCollectionFilter
//
//	Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.
type UpdateCloudFormationCollectionFilter struct {
	StackNames []string `json:"StackNames,omitempty"`
}
