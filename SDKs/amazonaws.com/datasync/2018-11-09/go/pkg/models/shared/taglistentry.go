package shared

// TagListEntry
// Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html">ListTagsForResource</a> operation is called.
type TagListEntry struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
