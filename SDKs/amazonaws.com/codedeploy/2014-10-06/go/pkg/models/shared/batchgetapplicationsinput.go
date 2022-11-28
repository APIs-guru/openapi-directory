package shared

// BatchGetApplicationsInput
// Represents the input of a <code>BatchGetApplications</code> operation.
type BatchGetApplicationsInput struct {
	ApplicationNames []string `json:"applicationNames"`
}
