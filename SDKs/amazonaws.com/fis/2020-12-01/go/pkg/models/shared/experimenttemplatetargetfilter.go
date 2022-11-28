package shared

// ExperimentTemplateTargetFilter
// Describes a filter used for the target resources in an experiment template.
type ExperimentTemplateTargetFilter struct {
	Path   *string  `json:"path,omitempty"`
	Values []string `json:"values,omitempty"`
}
