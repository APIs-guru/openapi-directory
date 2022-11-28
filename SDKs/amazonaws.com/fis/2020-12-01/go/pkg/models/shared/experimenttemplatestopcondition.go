package shared

// ExperimentTemplateStopCondition
// Describes a stop condition for an experiment template.
type ExperimentTemplateStopCondition struct {
	Source *string `json:"source,omitempty"`
	Value  *string `json:"value,omitempty"`
}
