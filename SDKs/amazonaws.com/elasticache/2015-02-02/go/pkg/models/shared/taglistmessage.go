package shared

// TagListMessage
// Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
type TagListMessage struct {
	TagList []Tag
}
