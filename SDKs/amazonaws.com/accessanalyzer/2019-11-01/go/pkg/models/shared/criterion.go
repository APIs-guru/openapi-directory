package shared

type Criterion struct {
	Contains []string `json:"contains"`
	Eq       []string `json:"eq"`
	Exists   *bool    `json:"exists"`
	Neq      []string `json:"neq"`
}
