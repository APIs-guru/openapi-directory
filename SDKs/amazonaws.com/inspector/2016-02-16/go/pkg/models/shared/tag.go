package shared

// Tag
// A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.
type Tag struct {
	Key   string  `json:"key"`
	Value *string `json:"value,omitempty"`
}
