package shared

type RemoveTagsFromResourceRequest struct {
	ResourceArn string   `json:"ResourceArn"`
	TagKeyList  []string `json:"TagKeyList"`
}
