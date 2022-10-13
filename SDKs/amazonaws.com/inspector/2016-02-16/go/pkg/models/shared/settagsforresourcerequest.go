package shared

type SetTagsForResourceRequest struct {
	ResourceArn string `json:"resourceArn"`
	Tags        []Tag  `json:"tags"`
}
