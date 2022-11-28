package shared

// Tag
// Describes a tag that is applied to an AWS App Runner resource. A tag is a metadata item consisting of a key-value pair.
type Tag struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
