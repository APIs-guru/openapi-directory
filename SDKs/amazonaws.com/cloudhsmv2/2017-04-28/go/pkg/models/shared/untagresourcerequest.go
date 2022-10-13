package shared

type UntagResourceRequest struct {
	ResourceID string   `json:"ResourceId"`
	TagKeyList []string `json:"TagKeyList"`
}
