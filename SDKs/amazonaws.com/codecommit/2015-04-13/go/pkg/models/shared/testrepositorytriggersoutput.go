package shared

// TestRepositoryTriggersOutput
// Represents the output of a test repository triggers operation.
type TestRepositoryTriggersOutput struct {
	FailedExecutions     []RepositoryTriggerExecutionFailure `json:"failedExecutions,omitempty"`
	SuccessfulExecutions []string                            `json:"successfulExecutions,omitempty"`
}
