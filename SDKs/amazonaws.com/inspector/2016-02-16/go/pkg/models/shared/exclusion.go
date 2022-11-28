package shared

// Exclusion
// Contains information about what was excluded from an assessment run.
type Exclusion struct {
	Arn            string      `json:"arn"`
	Attributes     []Attribute `json:"attributes,omitempty"`
	Description    string      `json:"description"`
	Recommendation string      `json:"recommendation"`
	Scopes         []Scope     `json:"scopes"`
	Title          string      `json:"title"`
}
