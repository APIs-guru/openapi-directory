package shared

// Tag
// A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
