package shared

// CreateExperimentTemplateTargetInput
// Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
type CreateExperimentTemplateTargetInput struct {
	Filters       []ExperimentTemplateTargetInputFilter `json:"filters,omitempty"`
	ResourceArns  []string                              `json:"resourceArns,omitempty"`
	ResourceTags  map[string]string                     `json:"resourceTags,omitempty"`
	ResourceType  string                                `json:"resourceType"`
	SelectionMode string                                `json:"selectionMode"`
}
