package shared



type TestRepositoryTriggersOutput struct {
    FailedExecutions []RepositoryTriggerExecutionFailure `json:"failedExecutions,omitempty"`
    SuccessfulExecutions []string `json:"successfulExecutions,omitempty"`
    
}

