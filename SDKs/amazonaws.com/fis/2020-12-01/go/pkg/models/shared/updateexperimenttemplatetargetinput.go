package shared

type UpdateExperimentTemplateTargetInput struct {
	Filters       []ExperimentTemplateTargetInputFilter `json:"filters"`
	ResourceArns  []string                              `json:"resourceArns"`
	ResourceTags  map[string]string                     `json:"resourceTags"`
	ResourceType  string                                `json:"resourceType"`
	SelectionMode string                                `json:"selectionMode"`
}
