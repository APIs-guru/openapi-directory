package shared

type JobFilter struct {
	Name   *JobFilterNameEnum `json:"name"`
	Values []string           `json:"values"`
}
