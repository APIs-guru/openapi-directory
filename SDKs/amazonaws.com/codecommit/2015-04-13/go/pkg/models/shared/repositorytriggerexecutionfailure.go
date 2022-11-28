package shared

// RepositoryTriggerExecutionFailure
// A trigger failed to run.
type RepositoryTriggerExecutionFailure struct {
	FailureMessage *string `json:"failureMessage,omitempty"`
	Trigger        *string `json:"trigger,omitempty"`
}
