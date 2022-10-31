package shared

type ResourceTag struct {
	ResourceArn *string `json:"resourceArn,omitempty"`
	Tags        []Tag   `json:"tags,omitempty"`
}
