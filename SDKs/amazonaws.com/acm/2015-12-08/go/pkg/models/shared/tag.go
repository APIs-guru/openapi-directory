package shared

// Tag
// A key-value pair that identifies or specifies metadata about an ACM resource.
type Tag struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
