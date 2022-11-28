package shared

// Criterion
// The criteria to use in the filter that defines the archive rule.
type Criterion struct {
	Contains []string `json:"contains,omitempty"`
	Eq       []string `json:"eq,omitempty"`
	Exists   *bool    `json:"exists,omitempty"`
	Neq      []string `json:"neq,omitempty"`
}
