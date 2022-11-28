package shared

// ListOnPremisesInstancesOutput
// Represents the output of the list on-premises instances operation.
type ListOnPremisesInstancesOutput struct {
	InstanceNames []string `json:"instanceNames,omitempty"`
	NextToken     *string  `json:"nextToken,omitempty"`
}
