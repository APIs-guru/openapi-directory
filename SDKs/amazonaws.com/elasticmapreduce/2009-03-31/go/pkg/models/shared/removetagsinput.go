package shared

// RemoveTagsInput
// This input identifies an Amazon EMR resource and a list of tags to remove.
type RemoveTagsInput struct {
	ResourceID string   `json:"ResourceId"`
	TagKeys    []string `json:"TagKeys"`
}
