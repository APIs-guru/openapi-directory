package shared

// StepDetail
// Combines the execution state and configuration of a step.
type StepDetail struct {
	ExecutionStatusDetail StepExecutionStatusDetail `json:"ExecutionStatusDetail"`
	StepConfig            StepConfig                `json:"StepConfig"`
}
