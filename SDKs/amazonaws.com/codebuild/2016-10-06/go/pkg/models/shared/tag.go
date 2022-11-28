package shared

// Tag
// <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>
type Tag struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
