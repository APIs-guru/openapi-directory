package shared

// Tag
// A set of key-value pairs that are used to manage the resource.
type Tag struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}
