package shared

// CreateExperimentTemplateStopConditionInput
// Specifies a stop condition for an experiment template.
type CreateExperimentTemplateStopConditionInput struct {
	Source string  `json:"source"`
	Value  *string `json:"value,omitempty"`
}
