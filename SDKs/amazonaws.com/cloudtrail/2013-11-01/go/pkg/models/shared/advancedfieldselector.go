package shared

// AdvancedFieldSelector
// A single selector statement in an advanced event selector.
type AdvancedFieldSelector struct {
	EndsWith      []string `json:"EndsWith,omitempty"`
	Equals        []string `json:"Equals,omitempty"`
	Field         string   `json:"Field"`
	NotEndsWith   []string `json:"NotEndsWith,omitempty"`
	NotEquals     []string `json:"NotEquals,omitempty"`
	NotStartsWith []string `json:"NotStartsWith,omitempty"`
	StartsWith    []string `json:"StartsWith,omitempty"`
}
