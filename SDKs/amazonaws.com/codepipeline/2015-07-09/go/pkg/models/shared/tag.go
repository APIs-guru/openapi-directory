package shared

// Tag
// A tag is a key-value pair that is used to manage the resource.
type Tag struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}
