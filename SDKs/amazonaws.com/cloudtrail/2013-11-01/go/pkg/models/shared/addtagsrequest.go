package shared

type AddTagsRequest struct {
	ResourceID string `json:"ResourceId"`
	TagsList   []Tag  `json:"TagsList,omitempty"`
}
