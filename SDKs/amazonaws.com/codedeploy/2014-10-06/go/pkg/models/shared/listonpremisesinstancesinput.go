package shared

// ListOnPremisesInstancesInput
// Represents the input of a <code>ListOnPremisesInstances</code> operation.
type ListOnPremisesInstancesInput struct {
	NextToken          *string                 `json:"nextToken,omitempty"`
	RegistrationStatus *RegistrationStatusEnum `json:"registrationStatus,omitempty"`
	TagFilters         []TagFilter             `json:"tagFilters,omitempty"`
}
