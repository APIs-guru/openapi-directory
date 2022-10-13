package shared

type TestRepositoryTriggersOutput struct {
	FailedExecutions     []RepositoryTriggerExecutionFailure `json:"failedExecutions"`
	SuccessfulExecutions []string                            `json:"successfulExecutions"`
}
