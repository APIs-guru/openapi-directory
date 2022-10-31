package shared

type CloudFormationCollectionFilter struct {
	StackNames []string `json:"StackNames,omitempty"`
}
