package shared

// RemoveTagsRequest
// Specifies the tags to remove from a trail.
type RemoveTagsRequest struct {
	ResourceID string `json:"ResourceId"`
	TagsList   []Tag  `json:"TagsList,omitempty"`
}
