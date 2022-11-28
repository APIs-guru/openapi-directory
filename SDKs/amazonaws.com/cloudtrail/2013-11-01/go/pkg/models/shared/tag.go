package shared

// Tag
// A custom key-value pair associated with a resource such as a CloudTrail trail.
type Tag struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
