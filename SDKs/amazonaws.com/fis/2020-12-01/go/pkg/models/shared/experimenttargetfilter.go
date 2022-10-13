package shared

type ExperimentTargetFilter struct {
	Path   *string  `json:"path"`
	Values []string `json:"values"`
}
