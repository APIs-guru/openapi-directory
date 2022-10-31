package shared

type ExperimentStopCondition struct {
	Source *string `json:"source,omitempty"`
	Value  *string `json:"value,omitempty"`
}
