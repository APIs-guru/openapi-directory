package shared

type ExperimentTemplateTargetFilter struct {
	Path   *string  `json:"path,omitempty"`
	Values []string `json:"values,omitempty"`
}
