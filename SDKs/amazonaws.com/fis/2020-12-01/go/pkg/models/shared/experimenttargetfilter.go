package shared

type ExperimentTargetFilter struct {
	Path   *string  `json:"path,omitempty"`
	Values []string `json:"values,omitempty"`
}
