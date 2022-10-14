package shared

type ExclusionPreview struct {
	Attributes     []Attribute `json:"attributes,omitempty"`
	Description    string      `json:"description"`
	Recommendation string      `json:"recommendation"`
	Scopes         []Scope     `json:"scopes"`
	Title          string      `json:"title"`
}
