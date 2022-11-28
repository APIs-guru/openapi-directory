package shared

// ExperimentTemplateTarget
// Describes a target for an experiment template.
type ExperimentTemplateTarget struct {
	Filters       []ExperimentTemplateTargetFilter `json:"filters,omitempty"`
	ResourceArns  []string                         `json:"resourceArns,omitempty"`
	ResourceTags  map[string]string                `json:"resourceTags,omitempty"`
	ResourceType  *string                          `json:"resourceType,omitempty"`
	SelectionMode *string                          `json:"selectionMode,omitempty"`
}
