package shared

type RepositoryTriggerExecutionFailure struct {
	FailureMessage *string `json:"failureMessage,omitempty"`
	Trigger        *string `json:"trigger,omitempty"`
}
