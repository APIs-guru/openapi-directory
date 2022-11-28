package shared

// ExperimentTargetFilter
// Describes a filter used for the target resources in an experiment.
type ExperimentTargetFilter struct {
	Path   *string  `json:"path,omitempty"`
	Values []string `json:"values,omitempty"`
}
