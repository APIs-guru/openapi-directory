package shared

// Bucket
// A container for facet information.
type Bucket struct {
	Count *int64  `json:"count,omitempty"`
	Value *string `json:"value,omitempty"`
}
