package shared

// Tag
// Metadata that you can assign to a delivery stream, consisting of a key-value pair.
type Tag struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
