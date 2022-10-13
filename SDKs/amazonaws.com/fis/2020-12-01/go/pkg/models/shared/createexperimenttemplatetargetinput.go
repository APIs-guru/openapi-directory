package shared

type CreateExperimentTemplateTargetInput struct {
	Filters       []ExperimentTemplateTargetInputFilter `json:"filters"`
	ResourceArns  []string                              `json:"resourceArns"`
	ResourceTags  map[string]string                     `json:"resourceTags"`
	ResourceType  string                                `json:"resourceType"`
	SelectionMode string                                `json:"selectionMode"`
}
