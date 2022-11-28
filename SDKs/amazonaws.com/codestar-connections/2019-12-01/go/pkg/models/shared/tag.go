package shared

// Tag
// <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p>
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
