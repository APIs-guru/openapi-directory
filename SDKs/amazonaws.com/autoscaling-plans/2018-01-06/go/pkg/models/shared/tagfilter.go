package shared

// TagFilter
// Represents a tag.
type TagFilter struct {
	Key    *string  `json:"Key,omitempty"`
	Values []string `json:"Values,omitempty"`
}
