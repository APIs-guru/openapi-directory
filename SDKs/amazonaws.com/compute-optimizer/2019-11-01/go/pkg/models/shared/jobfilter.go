package shared

type JobFilter struct {
	Name   *JobFilterNameEnum `json:"name,omitempty"`
	Values []string           `json:"values,omitempty"`
}
