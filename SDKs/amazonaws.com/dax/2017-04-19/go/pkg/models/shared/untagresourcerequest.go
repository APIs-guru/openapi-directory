package shared

type UntagResourceRequest struct {
	ResourceName string   `json:"ResourceName"`
	TagKeys      []string `json:"TagKeys"`
}
