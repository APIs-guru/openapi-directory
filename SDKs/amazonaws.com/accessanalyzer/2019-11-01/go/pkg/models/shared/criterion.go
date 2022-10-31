package shared

type Criterion struct {
	Contains []string `json:"contains,omitempty"`
	Eq       []string `json:"eq,omitempty"`
	Exists   *bool    `json:"exists,omitempty"`
	Neq      []string `json:"neq,omitempty"`
}
