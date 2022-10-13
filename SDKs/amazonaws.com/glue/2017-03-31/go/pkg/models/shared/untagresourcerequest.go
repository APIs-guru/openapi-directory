package shared

type UntagResourceRequest struct {
	ResourceArn  string   `json:"ResourceArn"`
	TagsToRemove []string `json:"TagsToRemove"`
}
