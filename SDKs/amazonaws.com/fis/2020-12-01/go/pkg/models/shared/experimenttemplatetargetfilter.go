package shared

type ExperimentTemplateTargetFilter struct {
	Path   *string  `json:"path"`
	Values []string `json:"values"`
}
