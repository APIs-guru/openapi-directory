package shared

// AddTagsRequest
// Specifies the tags to add to a trail.
type AddTagsRequest struct {
	ResourceID string `json:"ResourceId"`
	TagsList   []Tag  `json:"TagsList,omitempty"`
}
