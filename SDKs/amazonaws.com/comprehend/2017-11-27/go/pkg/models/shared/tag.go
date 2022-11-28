package shared

// Tag
// A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.
type Tag struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
