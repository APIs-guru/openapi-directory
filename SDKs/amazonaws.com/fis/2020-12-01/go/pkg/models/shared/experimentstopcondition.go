package shared

// ExperimentStopCondition
// Describes the stop condition for an experiment.
type ExperimentStopCondition struct {
	Source *string `json:"source,omitempty"`
	Value  *string `json:"value,omitempty"`
}
