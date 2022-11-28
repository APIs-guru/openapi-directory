package shared

// Tag
// The tag structure that contains a tag key and value.
type Tag struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
