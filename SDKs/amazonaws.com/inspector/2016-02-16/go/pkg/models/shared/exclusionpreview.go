package shared

// ExclusionPreview
// Contains information about what is excluded from an assessment run given the current state of the assessment template.
type ExclusionPreview struct {
	Attributes     []Attribute `json:"attributes,omitempty"`
	Description    string      `json:"description"`
	Recommendation string      `json:"recommendation"`
	Scopes         []Scope     `json:"scopes"`
	Title          string      `json:"title"`
}
