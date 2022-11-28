package shared

// Tag
// An arbitary key/value pair used to add searchable metadata to secure tunnel resources.
type Tag struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}
