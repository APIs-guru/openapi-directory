package shared

// UpdateExperimentTemplateStopConditionInput
// Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
type UpdateExperimentTemplateStopConditionInput struct {
	Source string  `json:"source"`
	Value  *string `json:"value,omitempty"`
}
