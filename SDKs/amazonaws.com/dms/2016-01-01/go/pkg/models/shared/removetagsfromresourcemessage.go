package shared

// RemoveTagsFromResourceMessage
// Removes one or more tags from an DMS resource.
type RemoveTagsFromResourceMessage struct {
	ResourceArn string   `json:"ResourceArn"`
	TagKeys     []string `json:"TagKeys"`
}
