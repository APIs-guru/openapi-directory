package shared

type ResourceTag struct {
	ResourceArn *string `json:"resourceArn"`
	Tags        []Tag   `json:"tags"`
}
