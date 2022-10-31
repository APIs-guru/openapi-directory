package shared

type RemoveTagsFromResourceRequest struct {
	ResourceID string   `json:"ResourceId"`
	TagKeys    []string `json:"TagKeys"`
}
