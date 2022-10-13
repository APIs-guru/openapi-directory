package shared

type TagResourceRequest struct {
	ResourceArn string `json:"resourceArn"`
	Tags        []Tag  `json:"tags"`
}
