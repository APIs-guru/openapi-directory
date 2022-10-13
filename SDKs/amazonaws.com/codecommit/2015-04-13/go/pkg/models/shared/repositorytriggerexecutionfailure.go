package shared

type RepositoryTriggerExecutionFailure struct {
	FailureMessage *string `json:"failureMessage"`
	Trigger        *string `json:"trigger"`
}
