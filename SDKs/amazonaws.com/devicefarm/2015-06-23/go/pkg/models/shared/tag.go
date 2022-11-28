package shared

// Tag
// The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
