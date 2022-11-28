package shared

// StopExecutionTrigger
// The interaction that stopped a pipeline execution.
type StopExecutionTrigger struct {
	Reason *string `json:"reason,omitempty"`
}
