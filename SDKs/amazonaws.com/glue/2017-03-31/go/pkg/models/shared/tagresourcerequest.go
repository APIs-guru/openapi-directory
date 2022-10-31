package shared

type TagResourceRequest struct {
	ResourceArn string            `json:"ResourceArn"`
	TagsToAdd   map[string]string `json:"TagsToAdd"`
}
