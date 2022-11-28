package shared

// Tag
// <p>A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul>
type Tag struct {
	Key         *string `json:"Key,omitempty"`
	ResourceArn *string `json:"ResourceArn,omitempty"`
	Value       *string `json:"Value,omitempty"`
}
