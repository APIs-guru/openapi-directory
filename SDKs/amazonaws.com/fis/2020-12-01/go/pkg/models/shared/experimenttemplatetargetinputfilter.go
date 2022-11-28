package shared

// ExperimentTemplateTargetInputFilter
// Describes a filter used for the target resource input in an experiment template.
type ExperimentTemplateTargetInputFilter struct {
	Path   string   `json:"path"`
	Values []string `json:"values"`
}
